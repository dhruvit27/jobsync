import React, { useState } from 'react';
import RightList from './RightList';

const RightManagement = () => {
    const [rights, setRights] = useState([]);
    const [newRight, setNewRight] = useState('');

   
    const handleChange = (e) => {
        setNewRight(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRights([...rights, { id: rights.length + 1, name: newRight }]);
        setNewRight('');
    };

    return (
        <div class="User-Mag-Container">
            <h2>Right Management</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" value={newRight} onChange={handleChange} className="form-control" placeholder="Right Name" required />
                </div>
                <button type="submit" className="btn btn-dark">Add Right</button>
            </form>
            <RightList rights={rights} />
        </div>
    );
};

export default RightManagement;
