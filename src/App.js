import React from "react";
import "./styles.css";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import {Navigate, Route, Routes} from "react-router-dom";

export default function App() {
   return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/map" element={<MapPage/>}></Route>
            <Route path="*" element={<Navigate to="/map"/>}></Route>
        </Routes>
    );
}
