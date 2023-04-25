import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'


function ProgressBar({ label, value }) {
  return (
    <div className="progress centre">
        <div className="progress-bar">
      <div>{label}</div>
      <div value={value} style={{width: '20em'}} >{value}% </div>
      </div>
    </div>
    
    // <td>
		// 				<div className="progress">
		// 					<div className="progress-bar" style={{width: {value}}}>
		// 						<p></p>
		// 					</div>
		// 				</div>
		// 			</td>
	
  );
}

function UserProgress({ user }) {
  return (
    <div className="">
    
      <h2>{user.username}</h2>
      {/* <td>SOP</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '150px'}}>
								<p>50%</p>
							</div>
						</div>
					</td> */}
	  <h2>SOP</h2>
    <ProgressBar now={user.sop_progress} label={`${user.sop_progress}%`}/>
      <h2>Visa Application</h2>
	  <ProgressBar now={user.visa_application_progress} label={`${user.visa_application_progress}%`} />
      <h2>i20 Progress</h2>
	  <ProgressBar now={user.i_20_progress} label={`${user.i_20_progress}%`} />
    </div>
  );
}

function Progress() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
	
    <div>
      <nav>
      <Header />
    </nav>
      {users.map((user) => (
        <UserProgress key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Progress;
