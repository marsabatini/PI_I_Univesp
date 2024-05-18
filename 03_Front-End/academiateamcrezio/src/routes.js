import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Pages/Home/index";
import Cadastro from "../src/Pages/Home/Cadastro/";
import Login from "./Pages/Home/Login";

export default function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />          
            </Routes>
        </BrowserRouter>
    );
}