import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>LET'S WORK TOGETHER</h1>
      <p>Ready to Chip in?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          redirectPage='sign-up'
        >
          Sign Up
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;