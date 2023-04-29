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
            <td>i20 Progress</td>
            <td>
              <ProgressBar now={user.i_20_progress} label={`${user.i_20_progress}%`} />
            </td>
          </tr>
          <tr>
            <td>GPA</td>
            <td>
              <ProgressBar now={user.GPA} label={`${user.GPA}`} />
            </td>
          </tr>
          <tr>
            <td>GRE</td>
            <td>{user.GRE}</td>
          </tr>
          <tr>
            <td>Admitted</td>
            <td>{user.Admitted}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{user.country}</td>
          </tr>
          <tr>
            <td>Education Domain</td>
            <td>{user.domain}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Progress() {
  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [greSortOrder, setGreSortOrder] = useState('asc');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    fetch('https://web-dev-server-wm7w.onrender.com/api/users')
      .then((response) => response.json())
      .then((data) => {
        if (sortOrder === 'asc') {
          data.sort((a, b) => a.GPA - b.GPA);
        } else if (sortOrder === 'desc') {
          data.sort((a, b) => b.GPA - a.GPA);
        }

        if (greSortOrder === 'asc') {
          data.sort((a, b) => a.GRE - b.GRE);
        } else if (greSortOrder === 'desc') {
          data.sort((a, b) => b.GRE - a.GRE);
        }

        if (selectedCountry) {
          data = data.filter((user) => user.country === selectedCountry);
        }

        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, [sortOrder, greSortOrder, selectedCountry]);

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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
        <div className="center">
          <label htmlFor="greSortOrder">Sort Order GRE:</label>
          <select id="greSortOrder" value={greSortOrder} onChange={(event) => setGreSortOrder(event.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="center">
          <label htmlFor="country">Select Country:</label>
          <select id="country" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">All</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
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
