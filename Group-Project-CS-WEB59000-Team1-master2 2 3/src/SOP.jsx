import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import Progress from './Progress';
import Footer from './Footer'

function SOP() {
  
  return (
    <div>
        <div>
            <nav>
                <Header />
            </nav>
            <div>
            <div className="center">
                <h1 style={{ paddingTop: '1.7em', fontSize: '2.5em'}}>Don't know how to write an SOP?</h1>
                {/* <img src="/images/Logo.png" alt="Company logo"  className="center-image" style={{ transform: 'scale(0.65)' }}/> */}
                <video loop autoPlay muted className="video-bg" preload="auto" src="images/kidSOP.mp4" style={{ paddingTop: '2em'}}></video>

            </div>
            <div style={{ padding: '0em 1em' }}>
            <h2>How to Write a SOP?</h2>
            <h4>What is SOP?</h4>
            <p>
            A statement of purpose (SOP), sometimes referred to as a personal statement, is a critical piece of a graduate school application that tells admissions committees who you are, what your academic and professional interests are, and how you’ll add value to the graduate program you’re applying to.

            Jared Pierce, associate director of enrollment services at Northeastern University, says a strong statement of purpose can be the deciding factor in a graduate student’s admission.  

            “Your statement of purpose is where you tell your story about who you are and why you deserve to be a part of the [university’s] community. It gives the admissions committee the chance to get to know you and understand how you’ll add value to the classroom,” he says.
            </p>
            <h4>How long is a statement of purpose?</h4>
            <p>
                “A statement of purpose should be between 500 and 1,000 words,” Pierce says, noting that it should typically not exceed a single page. He advises that students use a traditional font at a readable size (11- or 12-pt) and leave enough whitespace in the margins to make the statement easy-to-read. Make sure to double-space the statement if the university has requested it, he adds. 
            </p>
            <h4>How to write one?</h4>
            <h5> 1. Brainstorm your ideas.</h5>
            <p>
            “Throughout the application process, you’re afforded few opportunities to address the committee directly. Here is your chance to truly speak directly to them. Each student arrives at this process with a unique story, including prior jobs, volunteer experience, or undergraduate studies. Think about what makes you you and start outlining.”
            </p>
            <h5>2. Develop an outline.</h5>
            <p>
            An effective outline for your statement of purpose might look something like this:
            </p>
            <li>
            INTRODUCTION
            </li>
            <li>
            BODY 
            </li>
            <li>
            CONCLUSION
            </li>
            <h4>3. Write the first draft.</h4>
            <p>
            Your statement of purpose should communicate who you are and why you are interested in a particular program, but it also needs to be positioned in a way that differentiates you from other applicants. 

            Admissions professionals already have your transcripts, resumé, and test scores; the statement of purpose is your chance to tell your story in your own words.
            </p>
            </div>
            </div>
        </div> 
        <Footer />
    </div>
  );
}

export default SOP;
