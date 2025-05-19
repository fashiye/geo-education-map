import React from 'react';

interface SidebarProps {
    cityInfo: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ cityInfo }) => {
    return (
        <div className="sidebar">
            <h2>地理信息</h2>
            <p>{cityInfo}</p>
        </div>
    );
};

export default Sidebar;