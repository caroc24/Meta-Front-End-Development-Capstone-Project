import React from "react";
import ReservationForm from "./ReservationForm";

function Reservations(props){
    return (
        <ReservationForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    )
}

export default Reservations;