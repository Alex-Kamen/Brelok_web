import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import SidebarIcon from "../components/SidebarIcon";

const MapPage = () => {
    const [sidebarStatus, setSidebarStatus] = useState('close');

    return (
        <div>
            <SidebarIcon setSidebarStatus={setSidebarStatus}/>
            <Sidebar sidebarStatus={sidebarStatus} setSidebarStatus={setSidebarStatus}/>
            <Map/>
        </div>
    );
};

export default MapPage;
