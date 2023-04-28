import React from 'react';
import Header from './Header';
import './App.css';
import Footer from './Footer'
import visa from './assets/visa.jpg'

function Visa() {
  return (
    <div>
    {/* <div className="container"> */}
      <Header />
    {/* </div> */}
    <div className="center">
      <img src={visa} alt="Company logo"  className="center-image" style={{ width: '100%' }}/>
    </div>
    <div  style={{ padding: '0em 1em' }}>
    <h2>Types of US Student Visa</h2>
    <p>Before moving on to the USA study visa requirements, let us make you aware about the US student visa types. Given below are the 3 US student visa types:</p>
    <ul>
      <li>F-1 Student Visa: This is one of the most common types of US student visa and is suitable for programs requiring more than 18 hours of attendance per week. This visa type includes both UG and PG programs.</li>
      <li>J-1 Exchange Student Visa: The J-1 visa is suitable for students, scholars, working professionals looking for a short term program to study in the US. The visa is also applicable for students visiting the US for exchange programs.</li>
      <li>M-1 Vocational/ Non-Academic Visa: This particular type of visa is required for vocational programs and technical schools. This visa does not allow students to overstay in the US.</li>
    </ul>
    
    <h2>Requirements Pertaining to US Student Visa</h2>
    <p>Let us now move on to discovering the US student visa requirements. Given below are the various types of documents required to start your USA student visa application process:</p>
    <h3>Academic Documents</h3>
    <ul>
      <li>Academic transcripts from high school</li>
      <li>Bachelor's degree (if required)</li>
      <li>Acceptance letter (from your university/college)</li>
      <li>English language proficiency proof (IELTS, TOEFL, PTE)</li>
      <li>ACT, SAT, GMAT, GRE scores</li>
      <li>Provisional certificates</li>
      <li>LORs, SOPs</li>
      <li>Work experience proof</li>
    </ul>
    <h3>Financial Documents</h3>
    <ul>
      <li>Bank statements (I-20 proof of funds)</li>
      <li>Salary slips and letter of employment</li>
      <li>Sponsorship letter (if available)</li>
      <li>Tax returns from past 3 years</li>
      <li>Loan approval letter (if required)</li>
      <li>Statement from CA</li>
      <li>Scholarship letter (if available)</li>
    </ul>
    
    <h3>Visa Documents</h3>
    <ul>
      <li>Valid passport</li>
      <li>Printed copy of DS-160 form</li>
      <li>Interview appointment letter (original and copy)</li>
      <li>SEVIS fee receipt</li>
      <li>I-20 form (given by your university/college)</li>
      <li>Visa fee payment confirmation slip</li>
    </ul>
    </div>
    <Footer />
  </div>
  );
}

export default Visa;
