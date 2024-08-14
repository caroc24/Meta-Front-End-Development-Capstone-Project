import React from 'react';
import '../App.css';
import banner from '../images/banner.jpg';
import Reservations from './Reservations';
import {Routes, Route} from 'react-router-dom'

function CallToAction(){
    return(
        <header className='header'>
            <section>
                {/* Banner Texts */}
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/" className="banner-img">
                        <img src ={banner} height={50} alt="Little Lemon logo"/>
                    </a>
                    <Routes>
                        <Route path="/reservations" element={<Reservations />} />
                    </Routes>

                    <button>Reserve a Table</button>
                </div>
            </section>
        </header>
    )
}
export default CallToAction;