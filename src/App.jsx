import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import LandingContent from './components/layouts/landing.jsx';
import ReactAct from './components/layouts/reactAct.jsx';
import { Route, Routes } from 'react-router-dom';
import "./styles.css";

export default function App() {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element ={<LandingContent/>}/>
            <Route path='/ReactAct' element ={<ReactAct/>}/>
          </Routes>
        </div>
    </>
  );
}
