import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../home";
import Tutorial from "../tutorial";
import Tools from "../tools";
import Rewards from "../reward";

function RouterLink() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
             <Route path="/home" element={<Home />} />
             <Route path="/tutorial" element={<Tutorial />} />
             <Route path="/tools" element={<Tools />} />
             <Route path="/tasks" element={<Rewards />} />
        </Routes>
    );
}

export default RouterLink;
