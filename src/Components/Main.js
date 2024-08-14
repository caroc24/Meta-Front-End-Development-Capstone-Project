import React from 'react';
import '../App.css';
import banner from '../images/banner.jpg';
import Reservations from './Reservations';
import {Routes, Route} from 'react-router-dom'
import CallToAction from './CalltoAction';

function Main(){
    return (
        <div>
            <Routes>
                <Route path="/" element={<CallToAction />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
            </Routes>
        </div>
    );
}

export default Main;