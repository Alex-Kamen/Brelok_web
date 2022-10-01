import React from 'react';
import classes from "../Device.module.css";

const DeviceInfo = ({device}) => {
    return (
        <div>
            <div>
                <h3 className={classes.modal__title}>Информация об устройстве</h3>
            </div>
            <hr/>
            <div className={classes.deviceInfo__item}>
                <div>API-ключ:</div>
                <div>{device.api_key}</div>
            </div>
            <div className={classes.deviceInfo__item}>
                <div>Наименование:</div>
                <div>{device.name}</div>
            </div>
            <hr/>
        </div>
    );
};

export default DeviceInfo;
