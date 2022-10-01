import React from 'react';
import BurgerIcon from "./UI/icon/BurgerIcon";

const SidebarIcon = ({setSidebarStatus}) => {
    return (
        <div className="sidebar__icon">
            <div className="burger__icon" onClick={() => setSidebarStatus('open')}><BurgerIcon /></div>
        </div>
    );
};

export default SidebarIcon;
