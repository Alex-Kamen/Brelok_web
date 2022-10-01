import React, {useState} from 'react';
import classes from "./Device.module.css";
import DeviceInfo from "./deviceModalType/DeviceInfo";
import DeviceForm from "./deviceModalType/DeviceForm";
import WifiList from "../wifi/WifiList";
import {useDispatch} from "react-redux";
import {fetchDeleteDevice} from "../../store/deviceReducer";

const DeviceModal = ({device, isShow, isShowCallback}) => {
    const [modalStatus, setModalStatus] = useState(true);
    const dispatch = useDispatch();

    function deleteDevice() {
        isShowCallback(false);
        dispatch(fetchDeleteDevice(device.id));
    }

    if (isShow) {
        return (
            <div className={classes.modal__wrapper} onClick={() => isShowCallback(false)}>
                <div className={classes.modal__content} onClick={(event) => event.stopPropagation()}>
                    {modalStatus ? <DeviceInfo device={device}/> : <DeviceForm device={device} deviceModalTypeStatusCallback={setModalStatus}/>}
                    <div style={{textAlign: 'right'}}>
                        <button className={classes.buttonDelete} onClick={deleteDevice}>Удалить</button>
                        <button
                            className={classes.buttonPrimary}
                            onClick={() => setModalStatus(!modalStatus)}
                        >
                            {modalStatus ? 'Редактировать' : 'Подробнее'}
                        </button>
                    </div>
                    <hr/>
                    <WifiList deviceId={device.id}/>
                </div>
            </div>
        );
    }
};

export default DeviceModal;
