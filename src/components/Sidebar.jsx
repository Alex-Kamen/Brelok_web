import React, {useState} from 'react';
import {useSelector} from "react-redux";
import DeviceList from "./device/DeviceList";
import LogoutIcon from "./UI/icon/LogoutIcon";
import {Link} from "react-router-dom";
import BurgerIcon from "./UI/icon/BurgerIcon";

const Sidebar = ({sidebarStatus, setSidebarStatus}) => {
    const deviceList = useSelector((state) => state.device.deviceList);
    const user = JSON.parse(localStorage.getItem('auth'));

    function logout() {
        localStorage.removeItem('auth');
    }

    return (
        <div className={["sidebar", sidebarStatus].join(' ')}>
            <div className="sidebar__content">
                <div style={{flex: '1 0 auto'}}>
                    <div className="sidebar__title">
                        <h3 className="user__login">{user.login}</h3>
                        <div className="burger__icon" onClick={() => setSidebarStatus('close')}><BurgerIcon/></div>
                    </div>
                    <hr/>
                    <DeviceList deviceList={deviceList}/>
                </div>
                <div style={{flex: '0 0 auto'}}>
                    <hr />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div></div>
                        <Link to="/login" className="logout__icon" onClick={logout}><LogoutIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
