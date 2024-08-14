import React from 'react';
import '../App.css';
import logo from '../images/logo.jpg';

function Nav(){
    return <nav className="navbar">
        <a href="/" className="logo">
            <img src ={logo} height={50} alt="Little Lemon logo"/>
        </a>

        {/*Navigation Bar Items*/}
        <ul className="nav-links">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/orderonline">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
}

export default Nav;