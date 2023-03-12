// useEffect is used to limit the value of count between 0 and 20
// useEffect uses callback function as its argument. If count less than 0 setCount updates count to 0
// The same is applied if greater than 20 to set to 20
// The second argument depends on count state varable. Th effect will be run whenever the count changes.
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UniInfo() {
  
  return (
    <div>
    <div className="container">
    <nav>
      <Link to="/" className="nav-button">Visa Information</Link>
    </nav>
    </div>
    <div className="center">
      <img src="/images/UniInfo.png" alt="University information"  className="center-image" style={{ transform: 'scale(0.65)' }}/>
    </div>
    <h2>About Purdue University</h2>
    <h3>University Description</h3>
    <p>
      Purdue University was founded in 1869 under the Morrill Act of 1862. John Purdue, a local merchant, gave $150,000 to begin the University. Tippecanoe County gave $50,000 and local residents gave 100 acres for the new university. The Indiana State Legislature agreed to name the new school Purdue in gratitude to its largest benefactor. The new university began classes on September 16, 1874 with six instructors and 39 students.
    </p>
    <p>
      Currently, Purdue University has an enrollment of over 41,000 undergraduate (75%) and graduate students (23%). Approximately 2,000 full-time faculty teach and conduct research in Purdue's 157 principle buildings with 377 total buildings on 2,307 acres. Purdue University's schools include: agriculture; consumer and family science; education; engineering; liberal arts; management; pharmacy and pharmaceutical sciences; nursing; science; technology; and veterinary medicine. Purdue offers 6,700 courses in 200 specializations. For more than a quarter century, Purdue University has been the largest or second largest in undergraduate engineering enrollment in the country. Purdue research exceeds $347.1 million a year using more than 400 research labs. The University's decentralized 14 library system contains over 2.3 million volumes of information, including a substantial psychology library that has merged with the Humanities, Social Sciences, and Education library located in Stewart Center.
    </p>
    <p>
      Purdue University is committed to fostering and maintaining an inclusive community that values the inherent worth and value of every person. A few notable policies highlight this commitment and are found below.
    </p>
    <ul>
      <li>Purdue Non-discrimination Policy Statement</li>
      <li>Purdue Antiharassment Policy Statement</li>
    </ul>
    <h3>Student Demographics</h3>
<ul>
  <li>Purdue has been co-educational since 1876.</li>
  <li>Of Purdue's total enrollment (41,000), approximately 41.9% are female.</li>
  <li>Students from the State of Indiana make up 59% of Purdue's student body.</li>
  <li>Ninety-six percent of Purdue's students are also undergraduates between the ages of 17-25.</li>
  <li>Approximately 13.7% are American students of color.</li>
  <li>Purdue students travel abroad to more than 30 countries.</li>
  <li>Purdue has students from every state in the nation and from 130 countries (including: People's Republic of China, India, South Korea, Taiwan, Indonesia, Malaysia, Turkey, Pakistan, Japan, Singapore, Spain, Colombia).</li>
  <li>International students comprise at least 12.8% of the Purdue student body.</li>
  <li>Purdue's culturally diverse student body can be seen through its over 600 student organizations which include: Adult Students' Association of Purdue; Egyptian Student Association; Indonesian Students Association; Amigos Hermanos Hispanos; Asian American Association; Purdue Queer Student Union; Chinese Student Choir; Amnesty International; B'nai B'rith Hillel Foundation; Baha'i Club; Episcopal Student Association; Mennonite Student Fellowship; Pan-Orthodox Students; Feminist Union; University Church; Muslim Student Association; Indian Classical Music Association;</li>
 </ul>
  </div>
  );
}

export default UniInfo;
