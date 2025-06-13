import React from 'react';
import './MissionAction.css';

const handleClick = (id, changeStatus, newStatus) => {
	changeStatus(id, newStatus);
}

function MissionAction ({ id, changeStatus }) 
{
	return (
		<div className="MissionAction">
			<div id="launch" className="MissionAction-button" onClick={() => {
				handleClick(id, changeStatus, 'Active');
			}}>
				Launch
			</div>
			<div id="complete" className="MissionAction-button" onClick={() => {
				handleClick(id, changeStatus, 'Completed');
			}}>
				Complete
			</div>
		</div>




	);
}

export default MissionAction;
