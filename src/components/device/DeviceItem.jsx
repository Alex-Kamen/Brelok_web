import React, {useState} from 'react';
import StatusIcon from "../UI/StatusIcon/StatusIcon";
import classes from "./Device.module.css";
import DeviceModal from "./DeviceModal";

const DeviceItem = ({device}) => {
    const [isShowModal, setIsShowModal] = useState(false);

    return (
        <div>
            <div className={classes.deviceItem} onClick={() => setIsShowModal(true)}>
                <div>{device.id} - {device.name}</div> <StatusIcon status={device.status}/>
            </div>
            <DeviceModal isShow={isShowModal} isShowCallback={setIsShowModal} device={device}/>
        </div>
    );
};

export default DeviceItem;
