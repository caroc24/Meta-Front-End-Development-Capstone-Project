import React from 'react';
import '../App.css';

function ReservationForm(){
    return(
        <div>
            <form>
                <label>
                    Number of guests:
                    <input type="number" name="guests" />
                </label>
                <button type="Submit">Submit</button>
            </form>
        </div>
    );
}

export default ReservationForm;