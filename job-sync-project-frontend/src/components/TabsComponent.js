import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import UserManagement from './UserManagement';
import RoleManagement from './RoleManagement';
import RightManagement from './RightManagement';

const TabsComponent = () => {
    return (
        <Tabs defaultActiveKey="user-management" id="management-tabs" className="custom-tabs d-flex justify-content-between">
            <Tab eventKey="user-management" title="User Management">
                <UserManagement />
            </Tab>
            <Tab eventKey="role-management" title="Role Management">
                <RoleManagement />
            </Tab>
            <Tab eventKey="right-management" title="Right Management">
                <RightManagement />
            </Tab>
        </Tabs>
    );
};

export default TabsComponent;
