import React, {useState} from 'react';
import classes from "./wifi.module.css";
import DeleteIcon from "../UI/icon/DeleteIcon";
import InfoIcon from "../UI/icon/InfoIcon";
import EditIcon from "../UI/icon/EditIcon";
import SuccessIcon from "../UI/icon/SuccessIcon";
import {Wifi} from "../../models/Wifi";
import {useDispatch} from "react-redux";
import {fetchDeleteWifi, fetchEditWifi} from "../../store/wifiReducer";

const WifiItem = ({wifi}) => {
    const [rowStatus, setRowStatus] = useState(true);
    const [wifiData, setWifiData] = useState(new Wifi(wifi));
    const dispatch = useDispatch();

    function deleteWifi() {
        dispatch(fetchDeleteWifi(wifi.id));
    }

    function editWifi() {
        setRowStatus(true);
        dispatch(fetchEditWifi(wifiData))
    }

    return (
        <tr>
            <td>{wifi.id}</td>
            <td>{rowStatus
                ? wifi.ssid
                : <div><input value={wifiData.ssid} onInput={event => setWifiData(new Wifi({...wifiData, ssid: event.target.value}))}/></div>}</td>
            <td>{rowStatus
                ? wifi.password
                : <div><input value={wifiData.password} onInput={event => setWifiData(new Wifi({...wifiData, password: event.target.value}))}/></div>}</td>
            <td style={{width: '150px'}}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button className={classes.buttonDelete} onClick={deleteWifi}><DeleteIcon/></button>
                    {!rowStatus ? <button className={classes.buttonSuccess} onClick={editWifi}><SuccessIcon/></button> : ''}
                    <button className={classes.buttonPrimary} onClick={() => setRowStatus(!rowStatus)}>{rowStatus
                        ? <EditIcon />
                        : <InfoIcon />
                    }</button>
                </div>
            </td>
        </tr>
    );
};

export default WifiItem;
