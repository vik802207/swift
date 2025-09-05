/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Comment, User, fetchComments, fetchUsers } from '../api';
import DataGrid from '../components/DataGrid';
import Pagination from '../components/Pagination';
import '../App.css'

export default function Dashboard() {
const [comments, setComments] = useState<Comment[]>([]);
const [users, setUsers] = useState<User[]>([]);
const [search, setSearch] = useState(localStorage.getItem('search') || '');
const [page, setPage] = useState(Number(localStorage.getItem('page')) || 1);
const [pageSize, setPageSize] = useState(Number(localStorage.getItem('pageSize')) || 10);
const [sortColumn, setSortColumn] = useState<string | null>(localStorage.getItem('sortColumn'));
const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(localStorage.getItem('sortDirection') as any);


useEffect(() => {
fetchComments().then(setComments);
fetchUsers().then(setUsers);
}, []);
useEffect(() => {
localStorage.setItem('search', search);
localStorage.setItem('page', page.toString());
localStorage.setItem('pageSize', pageSize.toString());
if (sortColumn) localStorage.setItem('sortColumn', sortColumn);
if (sortDirection) localStorage.setItem('sortDirection', sortDirection);
}, [search, page, pageSize, sortColumn, sortDirection]);


function handleSort(column: string) {
if (sortColumn !== column) {
setSortColumn(column);
setSortDirection('asc');
} else if (sortDirection === 'asc') {
setSortDirection('desc');
} else if (sortDirection === 'desc') {
setSortColumn(null);
setSortDirection(null);
} else {
setSortDirection('asc');
}
}
const filtered = comments.filter(c => {
const phone = users.find(u => u.email === c.email)?.phone || '';
return (
c.name.toLowerCase().includes(search.toLowerCase()) ||
c.email.toLowerCase().includes(search.toLowerCase()) ||
phone.toLowerCase().includes(search.toLowerCase())
);
});


const sorted = [...filtered];
if (sortColumn && sortDirection) {
sorted.sort((a, b) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const valA: any = (a as any)[sortColumn];
const valB: any = (b as any)[sortColumn];
if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
return 0;
});
}

const totalPages = Math.ceil(sorted.length / pageSize);
const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);


return (
<div>
<h2 style={{
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
  background: "linear-gradient(90deg, #ff6ec4, #7873f5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
}}>
  Dashboard
</h2>

<input
  type="text"
  value={search}
  onChange={e => { setSearch(e.target.value); setPage(1); }}
  placeholder="Search name/email/phone"
  style={{
    padding: "10px 15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.1)",
    color: "#000",
    outline: "none",
    marginRight: "10px",
    width: "250px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }}
/>

<select
  value={pageSize}
  onChange={e => setPageSize(Number(e.target.value))}
  style={{
    padding: "10px 15px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.15)",
    color: "#000",
    cursor: "pointer",
    backdropFilter: "blur(6px)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }}
>
  <option value={10}>10</option>
  <option value={50}>50</option>
  <option value={100}>100</option>
</select>

<DataGrid data={paginated} users={users} sortColumn={sortColumn} sortDirection={sortDirection} onSort={handleSort} />
<Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
</div>
);
}