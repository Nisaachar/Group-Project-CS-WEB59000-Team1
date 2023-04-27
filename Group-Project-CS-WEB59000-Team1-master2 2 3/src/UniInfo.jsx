import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './Header'
import Footer from './Footer'

function UniInfo() {
  const [selectedUni, setSelectedUni] = useState('Purdue University');

  const handleUniClick = (uniName) => {
    setSelectedUni(uniName === selectedUni ? null : uniName);
  };

  const isUniSelected = (uniName) => uniName === selectedUni;

  return (
    <div  >
      <div className="container">
        <nav>
          <Header/>
        </nav>
      </div>
      <div className="center">
        <img src="/images/cloud.jpg" alt="University information"  className="center-image" style={{ width: '60%', height: '450px' }}/>
      </div>
      <div style={{ padding: '0em 3em' }}>
      <h2>Universities</h2>
      <button onClick={() => handleUniClick('Purdue University')}>Purdue University</button>
      <button onClick={() => handleUniClick('Ivy Tech Community College')}>Ivy Tech Community College</button>
      <button onClick={() => handleUniClick('Indiana University Bloomington')}>Indiana University Bloomington</button>
      <button onClick={() => handleUniClick('Indiana State University')}>Indiana State University</button>

      {isUniSelected('Purdue University') && (
        <>
          <h2>About Purdue University</h2>
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

        </>
      )}
      {isUniSelected('Ivy Tech Community College') && (
        <>
          <h2>About Ivy Tech Community College</h2>
          <p>About Ivy Tech Community College
Ivy Tech was established in 1963 and has continued to grow for the past 50 years into the largest community college system of its kind in the United States. Ivy Tech is accredited by the Higher Learning Commission of the North Central Association of Colleges and Schools and is a member of many other organizations and program specific review panels. At Ivy Tech we ensure that every degree program that we offer is affordable and relevant to today's workforce needs. Ivy Tech has 32 different on ground campus locations that can offer degree programs in the state of Indiana. The college has numerous other sites as well as the virtual campus that will be serving your needs.

Once you complete a degree program at Ivy Tech, it doesn't have to be the end of your educational journey. Ivy Tech has agreements with many four year colleges and universities, meaning that you can use the credits you have earned towards a Bachelors degree and beyond if that is your goal.

Ivy Tech is Indiana's most affordable College, and these affordable prices are extended to you as part of the Ivy Tech online virtual campus. Even at these affordable prices, some may still need help paying for College. Information about financial aid can be found on our Tuition & Fees page of this site.

Finally, it is worth mentioning that Ivy Tech maintains a commitment to focus on our students by keeping our class sizes small. This helps to build a learning community within our courses and to get more one-on-one attention from your instructors.</p>
        </>
      )}
      {isUniSelected('Indiana University Bloomington') && (
        <>
          <h2>About Indiana University Bloomington</h2>
          <p>Indiana University—Bloomington is a public institution that was founded in 1820. It has a total undergraduate enrollment of 34,253 (fall 2021), its setting is city, and the campus size is 1,953 acres. It utilizes a semester-based academic calendar. Indiana University—Bloomington's ranking in the 2022-2023 edition of Best Colleges is National Universities, #72. Its in-state tuition and fees are $11,447; out-of-state tuition and fees are $39,120.


No one quite knows what a "Hoosier" is, but a murky definition does not stop students at Indiana University— Bloomington from fiercely identifying with the term. The school's sports teams are notorious competitors in the NCAA Division I Big Ten Conference, and, since Indiana University does not have a mascot, all teams are known simply as Hoosiers. There are more than 750 student organizations on campus, and more than 8,200 students go Greek in the school’s large community of fraternities and sororities. Freshmen must live on campus for at least two semesters, though there are some exceptions. The Midwestern college town of Bloomington, or B-town, as it is known to many, is home to a lively cultural scene. Arts and entertainment performances, such as the annual Lotus World Music & Arts Festival, take place year-round. Students can explore the surrounding area through the Indiana University Outdoor Adventures program, which coordinates hiking, whitewater rafting and rock climbing trips. Active students can compete in the annual Little 500, the largest collegiate bike race in the nation and a fundraiser for university scholarships, or spend 36 hours on their feet in the IU Dance Marathon, a fundraiser for Riley Hospital for Children in Indianapolis.


Among IU Bloomington’s many graduate-level programs are the highly ranked Kelley School of Business, School of Education and Maurer School of Law. Distinguished Indiana alumni include composer and songwriter Hoagy Carmichael, who penned “Georgia on My Mind;" screenwriter and producer Jeri Taylor, who wrote for "Star Trek;" and author Meg Cabot, who wrote "The Princess Diaries" series.</p>
        </>
      )}
      {isUniSelected('Indiana State University') && (
        <>
          <h2>About Indiana State University</h2>
          <p>Indiana State University is a public institution that was founded in 1865. It has a total undergraduate enrollment of 7,704 (fall 2021), its setting is city, and the campus size is 435 acres. It utilizes a semester-based academic calendar. Indiana State University's ranking in the 2022-2023 edition of Best Colleges is National Universities, #331-440. Its in-state tuition and fees are $9,732; out-of-state tuition and fees are $21,160.


The Indiana State University campus is located in Terre Haute, about 70 miles southwest of Indianapolis. Undergraduates can choose from more than 80 academic majors, including education, criminology and nursing. Indiana State University students can also pursue master's degrees in many programs, including those within the College of Education and the Donald W. Scott College of Business.


The university offers much to do outside the classroom, including nearly 150 student organizations. ISU students can also get involved in the school's many events and traditions, such as the annual tandem bicycle race. Student athletes can try out for the Indiana State Sycamores varsity sports teams, which compete in the NCAA Division I Missouri Valley Conference. Notable Indiana State University alumni include Willa Brown Chappell, the first woman in the U.S. to hold both a mechanical and a commercial pilot’s license, and Wanda Ramey, one of the first female news anchors in the nation.</p>
        </>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default UniInfo;