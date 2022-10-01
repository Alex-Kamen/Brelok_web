import React from 'react';
import classes from "./Device.module.css";
import DeviceForm from "./deviceModalType/DeviceForm";
import {Device} from "../../models/Device";

const AddDeviceModal = ({isShow, isShowCallback}) => {
    const device = new Device({})

    if (isShow) {
        return (
            <div className={classes.modal__wrapper} onClick={() => isShowCallback(false)}>
                <div className={classes.modal__content} onClick={(event) => event.stopPropagation()}>
                    <DeviceForm device={device} deviceModalTypeStatusCallback={isShowCallback} isAdd={true}/>
                </div>
            </div>
        );
    }
};

export default AddDeviceModal;
