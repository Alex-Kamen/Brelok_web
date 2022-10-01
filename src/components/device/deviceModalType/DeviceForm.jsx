import React, {useState} from 'react';
import classes from "../Device.module.css";
import {Device} from "../../../models/Device";
import {useDispatch} from "react-redux";
import {fetchAddDevice, fetchEditDevice} from "../../../store/deviceReducer";

const DeviceForm = ({device, deviceModalTypeStatusCallback, isAdd}) => {
    const [deviceData, setDeviceData] = useState(new Device(device));
    const dispatch = useDispatch();

    function saveDevice() {
        deviceModalTypeStatusCallback(!isAdd);

        if (isAdd) {
            dispatch(fetchAddDevice(deviceData));
        } else {
            dispatch(fetchEditDevice(deviceData));
        }
    }

    return (
        <div>
            <div>
                <h3 className={classes.modal__title}>Форма редактирования устройства</h3>
            </div>
            <hr/>
            <div className={classes.deviceInfo__item}>
                <div>API ключ</div>
                <div>
                    <input
                        type="text"
                        value={deviceData.api_key}
                        onInput={event => setDeviceData(new Device({...deviceData, api_key: event.target.value}))}
                    />
                </div>
            </div>
            <div className={classes.deviceInfo__item}>
                <div>Наименование</div>
                <div>
                    <input
                        type="text"
                        value={deviceData.name}
                        onInput={event => setDeviceData(new Device({...deviceData, name: event.target.value}))}
                    />
                </div>
            </div>
            <div className={classes} style={{textAlign: 'right'}}>
                <button className={classes.buttonSuccess} onClick={saveDevice}>Сохранить</button>
            </div>
            <hr/>
        </div>
    );
};

export default DeviceForm;
