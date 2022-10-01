import React, {useState} from 'react';
import DeviceItem from "./DeviceItem";
import AddDeviceModal from "./AddDeviceModal";
import classes from "./Device.module.css";

const DeviceList = ({deviceList}) => {
    const [isAddShowModal, setIsAddShowModal] = useState(false);

    return (
        <div className={classes.device__list__inner}>
            <h3 className="device__list">
                <span>Список устройств</span>
                <div onClick={() => setIsAddShowModal(true)}>
                    +
                </div>
            </h3>
            <AddDeviceModal isShow={isAddShowModal} isShowCallback={setIsAddShowModal}/>
            <div>
                {deviceList.map(device => <DeviceItem device={device} key={device.id}/>)}
            </div>
        </div>
    );
};

export default DeviceList;
