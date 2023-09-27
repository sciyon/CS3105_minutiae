import React, { useEffect, useState } from 'react';
import './style.css';
import meme from '../../assets/sorry bro.png'

export default function UnfinishedComponent() {
  return (
    <div className='image-box'>
      <img alt='meme' src={meme}/>
    </div>
  );
}