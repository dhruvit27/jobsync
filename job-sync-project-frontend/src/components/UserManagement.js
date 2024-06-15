import React, { useState } from 'react';

import UserList from './UserList';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', role: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, newUser]);
        setNewUser({ name: '', role: '' });
    };

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    return (
        <div class="User-Mag-Container">
            <h2 class="User-Mag-Containe-Header">User Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={newUser.name} onChange={handleChange} placeholder="Name" required />
                <input type="text" name="role" value={newUser.role} onChange={handleChange} placeholder="Role" required />
                <button type="submit">Add User</button>
            </form>
            <UserList users={users} onDelete={handleDelete} />
        </div>
    );
};

export default UserManagement;
