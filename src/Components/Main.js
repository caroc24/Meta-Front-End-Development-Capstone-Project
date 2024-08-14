import React from 'react';
import '../App.css';
import Reservations from './Reservations';
import {Routes, Route} from 'react-router-dom'
import CallToAction from './CalltoAction';

function Main(){
    return (
        <main className ="main">
            <Routes>
                <Route path="/" element={<CallToAction />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </main>
    );
}

export default Main;