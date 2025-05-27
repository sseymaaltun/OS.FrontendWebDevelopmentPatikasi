import { NavLink, Routes, Route, useMatch, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import User from './User';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const match = useMatch("/users");
    const path = match?.pattern.path || "/users";

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(response => setUsers(response.data))
            .finally(() => setLoading(false));
    }, []);

    return ( 
        <div>
            <h1>Users</h1>
            {loading && <div>Loading...</div>}
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <NavLink style={({ isActive }) => isActive
      ? { backgroundColor: 'black', color: 'white' }
      : undefined}  to={`/users/${user.id}`}>{user.name}</NavLink>
                        </li>
                    ))
                }
            </ul>

            <Routes>
                <Route path="/" element={<h3>Please select a user.</h3>} />
                <Route path=":id" element={<User />} />
            </Routes>
        </div>
    );
}

export default Users;
