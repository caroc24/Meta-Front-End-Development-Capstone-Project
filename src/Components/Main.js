import React, { useReducer, useEffect } from 'react';
import '../App.css';
import Reservations from './Reservations';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import CallToAction from './CalltoAction';

function Main(){
    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const initialState = {availableTimes:  fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }
    const navigate = useNavigate();
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
    return (
        <main className ="main">
            <Routes>
                <Route path="/" element={<CallToAction />} />
                <Route path="/reservations" element={
                    <Reservations availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;