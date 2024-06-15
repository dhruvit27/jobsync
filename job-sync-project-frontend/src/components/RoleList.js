import React from 'react';

const RoleList = ({ roles }) => {
    return (
        <div>
            <h2>Roles</h2>
            <ul>
                {roles.map(role => (
                    <li key={role.id}>
                        {role.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleList;
