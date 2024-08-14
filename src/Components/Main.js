import React from 'react';
import '../App.css';
import Reservations from './Reservations';
import {Routes, Route} from 'react-router-dom'
import CallToAction from './CalltoAction';

function Main(){
    return (
        <main>
            <Routes>
                <Route path="/" element={<CallToAction />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
            </Routes>
        </main>
    );
}

export default Main;