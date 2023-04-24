import React, { useState, useEffect } from 'react';
import './App.css';

function ProgressBar({ label, value }) {
  return (
	
    <div className="progress-bar">
      <label>{label}</label>
      <progress value={value} max="100">{value}%</progress>
    </div>
	
  );
}

function UserProgress({ user }) {
  return (
    <div className="user-progress">
      <h2>{user.username}</h2>
	  <h3>SOP</h3>
      <ProgressBar now={user.sop_progress} label={`${user.sop_progress}%`} />
      <h3>Visa Application</h3>
	  <ProgressBar now={user.visa_application_progress} label={`${user.visa_application_progress}%`} />
      <h3>i20 Progress</h3>
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
      {users.map((user) => (
        <UserProgress key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Progress;
