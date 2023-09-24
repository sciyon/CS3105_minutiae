import React from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Landing from './components/layouts/landing.jsx';
import ReactAct from './components/layouts/reactAct.jsx';
import { Route, Routes } from 'react-router-dom';
import "./styles.css";

export default function App() {
  return (
    <>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element ={<Landing/>}/>
            <Route path='/ReactAct' element ={<ReactAct/>}/>
          </Routes>
        </div>
    </>
  );
}
