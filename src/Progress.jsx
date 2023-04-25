import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './App.css';

function Progress() {
    return(
        <div>
            <div className="container">
                <nav>
                <Header/>
                </nav>
                <div className="center">
                <img src="/images/Logo.png" alt="Company logo"  className="center-image" style={{ transform: 'scale(0.65)' }}/>
                </div>
                <body>
	<div className="container">
		<h1 style = {{ alignItems: 'center'  }} >Progress Tracker</h1>
		<table>
			<thead>
        <h2>Jon Doe</h2>
				<tr>
					<th>Task</th>
					<th>Progress</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>SOP</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '50%'}}>
								<p>70%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>I-20 Status</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '75%'}}>
								<p>50%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Visa Application</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '25%'}}>
								<p>25%</p>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>


      {/* second user */}
      
      <table>
			<thead>
        <h2>Harsh Sharma</h2>
				<tr>
					<th>Task</th>
					<th>Progress</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>SOP</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '90%'}}>
								<p>90%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>I-20 Status</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '15%'}}>
								<p>15%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Visa Application</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '45%'}}>
								<p>45%</p>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

    {/* third user */}

    <table>
			<thead>
        <h2>Suchir Naik</h2>
				<tr>
					<th>Task</th>
					<th>Progress</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>SOP</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '100%'}}>
								<p>100%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>I-20 Status</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '45%'}}>
								<p>45%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Visa Application</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '5%'}}>
								<p>5%</p>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

    {/* end */}
	</div>
</body>
            </div>
        </div>
    );
}

export default Progress;