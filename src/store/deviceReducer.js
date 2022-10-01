import axios from "axios";

const defaultState = {
    deviceList: []
}

const ADD_DEVICE = "ADD_DEVICE"
const REMOVE_DEVICE = "REMOVE_DEVICE"
const EDIT_DEVICE = "EDIT_DEVICE"
const DEVICE_LIST = "DEVICE_LIST"

export const deviceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_DEVICE:
            return {...state, deviceList: [...state.deviceList, action.payload]}
        case REMOVE_DEVICE:
            return {...state, deviceList: [...state.deviceList].filter(device => device.id !== action.payload)}
        case EDIT_DEVICE:
            return {
                ...state,
                deviceList: state.deviceList.map(device => device.id !== action.payload.id ? device : action.payload)
            }
        case DEVICE_LIST:
            return {...state, deviceList: [...state.deviceList, ...action.payload]}
        default:
            return state
    }
}

export const addDeviceAction = (payload) => ({type: ADD_DEVICE, payload})
export const removeDeviceAction = (payload) => ({type: REMOVE_DEVICE, payload})
export const editDeviceAction = (payload) => ({type: EDIT_DEVICE, payload})
export const deviceListAction = (payload) => ({type: DEVICE_LIST, payload})

export function fetchDeviceList() {
    return (dispatch) => {
        axios.post('http://server.esp/device/list', {id: JSON.parse(localStorage.getItem('auth')).id})
            .then((response) => {
                return dispatch(deviceListAction(response.data))
            })
    }
}

export function fetchAddDevice(device) {
    device.userId =  JSON.parse(localStorage.getItem('auth')).id;

    return (dispatch) => {
        axios.post('http://server.esp/device/add', device)
            .then((result) => {
                device.id = result.data.id;
                dispatch(addDeviceAction(device))
            })
    }
}

export function fetchEditDevice(device) {
    return (dispatch) => {
        axios.post(`http://server.esp/device/edit/${device.id}`, device)
            .then(() => dispatch(editDeviceAction(device)))
    }
}

export function fetchDeleteDevice(deviceId) {
    return (dispatch) => {
        axios.get(`http://server.esp/device/delete/${deviceId}`)
            .then(() => dispatch(removeDeviceAction(deviceId)))
    }
}
