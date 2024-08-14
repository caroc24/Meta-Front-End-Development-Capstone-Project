import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Specials from './Components/Specials';
import Footer from './Components/Footer';
import CallToAction from './Components/CalltoAction';
import ReservationForm from './Components/ReservationForm';

function App() {
  return (
    <div>
      <meta name="description" content="The Little Lemon restaurant proudly serves mediterranean family recipes with a modern twist." />
      <meta name="og:type" content="website"/>
      <meta name="og:image" content="logo.jpg"/>
      <meta name="og:url" content="https://littlelemon"/>
      <meta name="og:title" content="Little Lemon Restaurant"/>
      <meta name="og:description" content="Little Lemon is a family-owned Mediterranean restaurant that mixes family recipes with a modern twist."/>
      <meta name="og:locale" content="en_US"/>
      <meta name="og:site_name" content="Little Lemon"/>

      <Nav/>
      <Main/>
      <CallToAction/>
      <ReservationForm/>
      <Specials/>
      <Footer/>

    </div>
  );
}

export default App;
