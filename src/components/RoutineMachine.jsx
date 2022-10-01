import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({currentPosition, devicePosition}) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(currentPosition.latitude, currentPosition.longitude),
            L.latLng(devicePosition.lat, devicePosition.lng)
        ],
        lineOptions: {
            styles: [{ color: "#6FA1EC", weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: false,
        draggableWaypoints: false,
        fitSelectedRoutes: false,
        showAlternatives: false
    });

    return instance;
};

const RoutineMachine = createControlComponent(createRoutineMachineLayer);

export default RoutineMachine;
