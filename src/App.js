import React from 'react';
import './App.css';
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Specials from './Components/Specials';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Specials/>
      <Footer/>
    </>
  );
}

export default App;