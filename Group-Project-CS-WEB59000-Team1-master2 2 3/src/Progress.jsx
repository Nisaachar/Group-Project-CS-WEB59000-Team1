import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'


function ProgressBar({ label, value }) {
  const progressStyle = {
    width: `${value}%`,
    backgroundColor: value >= 100 ? 'green' : 'lightblue',
    height: '1.5em',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  };

  return (
    <div className="progress">
      <div className="progress-bar" style={progressStyle}>
        {label}
      </div>
    </div>
  );
}

function UserProgress({ user }) {
  return (
    <div className="center">
      <h2 className='center' style={{paddingTop: '2.5em'}}>{user.username}</h2>
      <table>
        <thead>
          <tr>
            <th>Progress Type</th>
            <th>Progress Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SOP</td>
            <td>
              <ProgressBar now={user.sop_progress} label={`${user.sop_progress}%`} />
            </td>
          </tr>
          <tr>
            <td>Visa Application</td>
            <td>
              <ProgressBar now={user.visa_application_progress} label={`${user.visa_application_progress}%`} />
            </td>
          </tr>
          <tr>
            <td>GPA</td>
            <td>
              <ProgressBar now={user.GPA} label={`${user.GPA}`} />
            </td>
          </tr>
          <tr>
            <td>i20 Progress</td>
            <td>
              <ProgressBar now={user.i_20_progress} label={`${user.i_20_progress}%`} />
            </td>
          </tr>
          <tr>
            <td>Admitted</td>
            <td>{user.Admitted}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Progress() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('http://localhost:8000/api/users')
      .then((response) => response.json())
      .then((data) => {
        if (sortOrder === 'asc') {
          data.sort((a, b) => a.GPA - b.GPA);
        } else if (sortOrder === 'desc') {
          data.sort((a, b) => b.GPA - a.GPA);
        }
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, [sortOrder]);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <nav>
        <Header />
      </nav>
     <div className="toggle-container">
      <div className="center">
        <label htmlFor="sortOrder">Sort Order GPA:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        </div>
      </div>
      {users.map((user) => (
        <UserProgress key={user._id} user={user} />
      ))}
    </div>
  );
}

export default Progress;
