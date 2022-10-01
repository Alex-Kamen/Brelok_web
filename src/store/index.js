import {createStore, combineReducers, applyMiddleware} from "redux";
import {deviceReducer} from "./deviceReducer";
import {wifiReducer} from "./wifiReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {sessionReducer} from "./sessionReducer";

const rootReducer = combineReducers({
    device: deviceReducer,
    wifi: wifiReducer,
    session: sessionReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
