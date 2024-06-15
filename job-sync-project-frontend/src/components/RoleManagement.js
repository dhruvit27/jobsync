import React, { useState } from 'react';
import RoleList from './RoleList';

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
    const [newRole, setNewRole] = useState('');

    const handleChange = (e) => {
        setNewRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRoles([...roles, { id: roles.length + 1, name: newRole }]);
        setNewRole('');
    };

    return (
        <div class="User-Mag-Container">
            <h2 >Role Management</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newRole} onChange={handleChange} placeholder="Role Name" required />
                <button type="submit">Add Role</button>
            </form>
            <RoleList roles={roles} />
        </div>
    );
};

export default RoleManagement;
