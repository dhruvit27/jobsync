import React from 'react';

const RightList = ({ rights }) => {
    return (
        <div>
            <h2>Rights</h2>
            <ul>
                {rights.map(right => (
                    <li key={right.id}>
                        {right.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RightList;
