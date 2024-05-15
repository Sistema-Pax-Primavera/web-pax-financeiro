import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Financeiro from "../pages/financeiro";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/financeiro">
        <Routes>
            <Route exact path="*" element={<Financeiro />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;