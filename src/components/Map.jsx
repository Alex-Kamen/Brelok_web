import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import {useDispatch, useSelector} from "react-redux";
import {fetchDeviceList} from "../store/deviceReducer";

const Map = (props) => {
    const [currentPosition, setCurrentPosition] = useState({});

    navigator.geolocation.getCurrentPosition((position) => setCurrentPosition(position));

    const dispatch = useDispatch();
    const deviceList = useSelector((state) => state.device.deviceList)

    useEffect(() => {
        dispatch(fetchDeviceList())
    }, [])

    return (
        <MapContainer
            doubleClickZoom={false}
            id="mapId"
            zoom={14}
            center={[33.5024, 36.2988]}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                currentPosition.coords && deviceList.map(device =>
                    <RoutineMachine
                        key={device.id}
                        currentPosition={currentPosition.coords}
                        devicePosition={{lat: device.lat, lng: device.lng}}
                    />
                )
            }

        </MapContainer>
    );
};

export default Map;
