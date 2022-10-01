import React, {useEffect, useState} from 'react';
import WifiItem from "./WifiItem";
import classes from "./wifi.module.css";
import {Wifi} from "../../models/Wifi";
import {useDispatch, useSelector} from "react-redux";
import {fetchAddWifi, fetchWifiList} from "../../store/wifiReducer";

const WifiList = ({deviceId}) => {
    const [wifi, setWifi] = useState(new Wifi({}));
    const dispatch = useDispatch();
    const wifiList = useSelector(state => state.wifi.wifiList);

    useEffect(() => {
        dispatch(fetchWifiList(deviceId))
    }, [])

    function addWifi() {
        setWifi(new Wifi({}));
        dispatch(fetchAddWifi(wifi, deviceId));
    }

    return (
        <div>
            <div>
                <h3>Список точек доступа для устройства</h3>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>SSID</td>
                        <td>Пароль</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>
                            <div>
                                <input
                                    value={wifi.ssid}
                                    onInput={event => setWifi(new Wifi({...wifi, ssid: event.target.value}))}
                                />
                            </div>
                        </td>
                        <td>
                            <div>
                                <input
                                    value={wifi.password}
                                    onInput={event => setWifi(new Wifi({...wifi, password: event.target.value}))}
                                />
                            </div>
                        </td>
                        <td style={{width: '150px'}}>
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <button className={classes.buttonPrimary} onClick={addWifi}>+</button>
                            </div>
                        </td>
                    </tr>
                    {wifiList.map(wifi => <WifiItem wifi={wifi} key={wifi.id}/>)}
                </table>
            </div>
        </div>
    );
};

export default WifiList;
