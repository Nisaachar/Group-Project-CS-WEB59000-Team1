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
		<h1>Progress Tracker</h1>
		<table>
			<thead>
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
								<p>50%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>Visa Applying</td>
					<td>
						<div className="progress">
							<div className="progress-bar" style={{width: '75%'}}>
								<p>75%</p>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td>I-20 Status</td>
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
	</div>
</body>
            </div>
        </div>
    );
}

export default Progress;