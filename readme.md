
Web Dev Report

Motivation
The objec)ve of our website is to provide an open-source repository for students
seeking admission to universi)es in the USA. Students face difficul)es in gathering
relevant informa)on regarding university admissions, and the admission process can be
confusing and overwhelming. Moreover, students oCen apply to universi)es without
any knowledge of previous students who have been admiDed, resul)ng in wasted )me,
money, and effort.

Therefore, our website aims to assist students in obtaining free-of-cost informa)on
about the admission process in the USA. We also provide valuable data on previous
students who have been admiDed to universi)es, allowing students to compare their
profiles and determine which universi)es are within their reach. Our ul)mate goal is to
enable students to make informed decisions, avoid unnecessary expenses on consul)ng
services, and apply to universi)es that match their academic profile, increasing their
chances of success.


Pages:
1. Login Page/ Registra2on page - These pages allow the user to log in as well as Register
as a new user. Sample login/password of user – John, password123. You may also
register as a new user and use your creden2als.
2. Home - Provides informa2on about the website
3. University Informa2on – Currently has informa2on about some of the popular
universi2es in Indiana
4. SOP – Provides informa2on about how to draN an SOP for students
5. Student Data – This page contains informa2on about students who have registered
before. It provides filters and valuable data on previous students who have been
admiDed to universi)es, allowing students to compare their profiles and
determine which universi)es are within their reach.
6. Visa Informa)on
7. This page contains informa)on about the Visa applica)on


Problems faced and how we overcame them:
1. Login page. The login had issues linking it to the home page. We tried four different
ways :
a. Directly link using the <Link>. This method was not able to link to the home page
aNer the login creden2als were verified.
b. history.push() – We tried this method but it had some conflicts due to the
version of our React Router DOM due to which our whole page was crashing.
c. window.loca)on.href – This method helped us land on the Home page aNer the
login creden2als were verified but it didn’t work once the app was deployed on
Netlify.
d. Navigate – This method worked both on our local as well as when the app was
deployed on Netlify.
2. Rendering the images and videos on the Netlify server. -The file path in the source
a]ribute of the image tag was not working on our local host However when we
deployed the app the image path was not working. To overcome this problem, we
imported the images as components in our app
3. There was a problem fetching data from the backend on the deployment server.
  

Therefore, we include the following for our deployment server. We changed the CORS to
include 2 links: hDps://a-zstudyabroad.netlify.app and hDp://localhost:5173. This
made sure that the web applica)on deployed on hDps://a-
zstudyabroad.netlify.app and the web applica)on running on
hDp://localhost:5173 can make requests to the server without being blocked by
the Same-Origin Policy.
  
  
Changes made on the website from the day of the presentation:
1. We added more filters to the User data page. Now the user can sort by GRE and also
choose a country in addi2on to filtering by GPA
2. Due to the feedback from the Professor, we also changed the CSS of the Login Page
Future scope and work:
• We plan to dedicate our summer to working on this website to scale it up and provide
students with a comprehensive repository of reliable data.
• Our goal is to gather real data from users and create an exhaus)ve collec)on of
informa)on on universi)es and the admission process in the USA.
  
GitHub Link: h]ps://github.com/Nisaachar/Group-Project-CS-WEB59000-Team1 - Please refer
to the code in the master branch
 
Deployment link: hDps://a-zstudyabroad.netlify.app
