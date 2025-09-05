import { useEffect, useState } from 'react';
import { User, fetchUsers } from '../api';
import { Link } from 'react-router-dom';


export default function Profile() {
const [user, setUser] = useState<User | null>(null);


useEffect(() => {
fetchUsers().then(users => setUser(users[0]));
}, []);


if (!user) return <p>Loading profile...</p>;


return (
<div>
<h2>Profile</h2>
<p><strong>Name:</strong> {user.name}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Phone:</strong> {user.phone}</p>
<Link to="/">Back to Dashboard</Link>
</div>
);
}