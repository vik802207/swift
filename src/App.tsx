import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile';


function App() {
return (
<div>
<header className="header">
<h1>Comments Dashboard</h1>
<nav>
<Link to="/">Dashboard</Link> | <Link to="/profile">Profile</Link>
</nav>
</header>
<main>
<Routes>
<Route path="/" element={<Dashboard />} />
<Route path="/profile" element={<Profile />} />
</Routes>
</main>
</div>
);
}


export default App;