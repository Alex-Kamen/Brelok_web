import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"/>
            <App/>
        </BrowserRouter>
    </Provider>
);
