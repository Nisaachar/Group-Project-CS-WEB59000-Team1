// useEffect is used to limit the value of count between 0 and 20
// useEffect uses callback function as its argument. If count less than 0 setCount updates count to 0
// The same is applied if greater than 20 to set to 20
// The second argument depends on count state varable. Th effect will be run whenever the count changes.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Progress from './Progress'

function Home() {
  
  return (
    <div>
    <div className="container">
    <nav>
      {/* <Link to="/" className="nav-button">Visa Information</Link> */}
      <Header />
    </nav>
    </div>
    <div className="center">
      <img src="/images/Logo.png" alt="Company logo"  className="center-image" style={{ transform: 'scale(0.65)' }}/>
    </div>
    <h1 className="center">Welcome to Study Abroad</h1>
    <div>
      <h2>Who are we?</h2>
      <p>
      You can only learn so much about another culture by watching National Geographic documentaries. If you really want to thrive in life, learning how to view things from another’s perspective is imperative. In case you haven’t noticed, we’re living in a globalized world. We share cultural icons with people in Japan, we trade with people in Bangladesh, and we face political challenges across continents. 
      </p>
      <h2>Why Study Abroad?</h2>
      <p>
      An international experience should be part of your education, whatever your goals, socioeconomic status, or field of study.  Every year, more than 300,000 American students study, intern, or volunteer abroad for academic credit on programs ranging from two weeks to a full academic year. International educational experiences that you undertake with thoughtfulness and purpose are valuable, regardless of duration or format.
      </p>
    </div>
    {/* <Progress /> */}
    </div>
  );
}

export default Home;
