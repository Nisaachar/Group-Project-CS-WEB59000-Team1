import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'


// function ProgressBar({ label, value }) {
//   return (
//     <div className="progress centre">
//         <div className="progress-bar">
//       <div>{label}</div>
//       <div value={value} style={{width: '20em'}} >{value}% </div>
//       </div>
//     </div>
    
//     // <td>
// 		// 				<div className="progress">
// 		// 					<div className="progress-bar" style={{width: {value}}}>
// 		// 						<p></p>
// 		// 					</div>
// 		// 				</div>
// 		// 			</td>
	
//   );
// }

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



// function UserProgress({ user }) {
//   return (
//     <div className="">
    
//       <h2>{user.username}</h2>
//       {/* <td>SOP</td>
// 					<td>
// 						<div className="progress">
// 							<div className="progress-bar" style={{width: '150px'}}>
// 								<p>50%</p>
// 							</div>
// 						</div>
// 					</td> */}
// 	  <h2>SOP</h2>
//     <ProgressBar now={user.sop_progress} label={`${user.sop_progress}%`}/>
//       <h2>Visa Application</h2>
// 	  <ProgressBar now={user.visa_application_progress} label={`${user.visa_application_progress}%`} />
//       <h2>i20 Progress</h2>
// 	  <ProgressBar now={user.i_20_progress} label={`${user.i_20_progress}%`} />
//     </div>
//   );
// }

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
        </tbody>
      </table>
    </div>
  );
}


function Progress() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://web-dev-server-wm7w.onrender.com/api/users')
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
