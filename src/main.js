import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main(){
    return(
        <Router>
            <Nav />
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
    )
}