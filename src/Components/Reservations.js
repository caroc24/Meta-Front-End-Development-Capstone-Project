import React from "react";
import ReservationForm from "./ReservationForm";
import { useState } from "react";

const Reservations = (props) => {
    return (
        <ReservationForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Reservations;