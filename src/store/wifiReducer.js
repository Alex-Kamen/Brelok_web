import axios from "axios";

const defaultState = {
    wifiList: []
}

const ADD_WIFI = "ADD_WIFI"
const REMOVE_WIFI = "REMOVE_WIFI"
const EDIT_WIFI = "EDIT_WIFI"
const WIFI_LIST = "WIFI_LIST"

export const wifiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_WIFI:
            return {...state, wifiList: [...state.wifiList, action.payload]}
        case REMOVE_WIFI:
            return {...state, wifiList: [...state.wifiList].filter(wifi => wifi.id !== action.payload)}
        case EDIT_WIFI:
            return {
                ...state,
                wifiList: state.wifiList.map(wifi => wifi.id !== action.payload.id ? wifi : action.payload)
            }
        case WIFI_LIST:
            return {...state, wifiList: action.payload}
        default:
            return state
    }
}

export const addWifiAction = (payload) => ({type: ADD_WIFI, payload})
export const removeWifiAction = (payload) => ({type: REMOVE_WIFI, payload})
export const editWifiAction = (payload) => ({type: EDIT_WIFI, payload})
export const wifiListAction = (payload) => ({type: WIFI_LIST, payload})

export function fetchWifiList(deviceId) {
    return (dispatch) => {
        axios.post(`http://server.esp/wifi/list/${deviceId}`)
            .then((response) => {
                return dispatch(wifiListAction(response.data))
            })
    }
}

export function fetchAddWifi(wifi, deviceId) {
    return (dispatch) => {
        axios.post(`http://server.esp/wifi/add/${deviceId}`, wifi)
            .then((result) => {
                wifi.id = result.data.id;
                dispatch(addWifiAction(wifi))
            })
    }
}

export function fetchEditWifi(wifi) {
    return (dispatch) => {
        axios.post(`http://server.esp/wifi/edit/${wifi.id}`, wifi)
            .then(() => dispatch(editWifiAction(wifi)))
    }
}

export function fetchDeleteWifi(wifiId) {
    return (dispatch) => {
        axios.get(`http://server.esp/wifi/delete/${wifiId}`)
            .then(() => dispatch(removeWifiAction(wifiId)))
    }
}
