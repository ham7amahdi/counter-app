import React, { useEffect, useState } from 'react';
import './display.css';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="loading">Loading users...</p>;

    return (
        <div className="user-container">
            <h2 className="heading">User List</h2>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p>Email: <span>{user.email}</span></p>
                        <p>Phone: <span>{user.phone}</span></p>
                        <p>
                            Address: <span>{user.address.street}, {user.address.city}, {user.address.zipcode}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;