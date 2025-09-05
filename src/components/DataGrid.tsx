import { Comment, User } from '../api';
import './DataGrid.css';

interface Props {
  data: Comment[];
  users: User[];
  sortColumn: string | null;
  sortDirection: 'asc' | 'desc' | null;
  onSort: (column: string) => void;
}

export default function DataGrid({ data, users, sortColumn, sortDirection, onSort }: Props) {
  function getPhone(email: string) {
    const u = users.find(u => u.email === email);
    return u ? u.phone : '-';
  }

  function renderSortIcon(column: string) {
    if (sortColumn !== column) return '↕';
    if (sortDirection === 'asc') return '↑';
    if (sortDirection === 'desc') return '↓';
    return '↕';
  }

  return (
    <div className="datagrid-wrapper">
      <h1 className="datagrid-title">📊 Stylish DataGrid</h1>
      <div className="datagrid-container">
        <table className="datagrid-table">
          <thead>
            <tr>
              <th onClick={() => onSort('postId')}>Post ID {renderSortIcon('postId')}</th>
              <th onClick={() => onSort('name')}>Name {renderSortIcon('name')}</th>
              <th onClick={() => onSort('email')}>Email {renderSortIcon('email')}</th>
              <th>Phone</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, idx) => (
              <tr key={c.id} className={idx % 2 === 0 ? 'even' : 'odd'}>
                <td>{c.postId}</td>
                <td className="bold">{c.name}</td>
                <td>{c.email}</td>
                <td>{getPhone(c.email)}</td>
                <td>{c.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
