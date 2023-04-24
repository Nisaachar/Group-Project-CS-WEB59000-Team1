import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Progress from './Progress'
import Footer from './Footer'


function Home() {
  
  return (
    <div>
    <div className="container">
    <nav>
      <Header />
    </nav>
    </div>
    <h1 className="center" style={{ paddingTop: '2.2em'}}>Welcome to Study Abroad</h1>
    <div className="center">
      {/* <img src="/images/Logo.png" alt="Company logo"  className="center-image" style={{ transform: 'scale(0.65)' }}/> */}
      {/* <video src="images/collegeVid.mp4" controls autoplay loop /> */}
      <video loop autoPlay muted className="video-bg" preload="auto" src="images/collegeVid.mp4" style={{ }}></video>
    </div>
    
    <div style={{ padding: '0em 3em' }}>
      <h2>Who are we?</h2>
      <p>
      You can only learn so much about another culture by watching National Geographic documentaries. If you really want to thrive in life, learning how to view things from another’s perspective is imperative. In case you haven’t noticed, we’re living in a globalized world. We share cultural icons with people in Japan, we trade with people in Bangladesh, and we face political challenges across continents. 
      </p>
      <h2>Benefits of Studying Abroad?</h2>
      <p>
      An international experience should be part of your education, whatever your goals, socioeconomic status, or field of study.  Every year, more than 300,000 American students 
      study, intern, or volunteer abroad for academic credit on programs ranging from two weeks to 
      a full academic year  . International educational experiences that you undertake with thoughtfulness and
       purpose are valuable, regardless of duration or format. By studying abroad, you will experience new perspectives, learn how to navigate different cultures, work with diverse peers, and communicate in other languages.
      </p>
      <h2>How we can help?</h2>
      <p>

        <li>While applying for studies in abroad, one encounters many problem.</li>
        <img src="/images/studying.jpg" alt="Company logo"  style={{ float: 'right', height: '250px' }}/>
        <li>Like finding a good list of college</li>
        <li>How to apply to them</li>
        <li>What exams are valid for your selected university</li>
        <li>How to apply for SOP</li>
        <li>What documents are needed for applying for visa</li>
        <li>What to do if your visa is rejected</li>
        

        <br />
        Also, you can login into the website and track your progress. We also have people who have already completed this process and you can
        connect with them in case if you've any queries at any stage of your application process. We are here help you achieve your dreams.
      </p>
    </div>
    {/* <Progress /> */}
    <Footer />
    </div>
  );
}

export default Home;
