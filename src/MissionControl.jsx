import MissionCard from "./MissionCard.jsx";
import MissionAction from "./MissionAction.jsx";
import MissionFilter from "./MissionFilter.jsx";

import "./App.css";

import { useState } from 'react';

function MissionControl () {


const INITIAL_MISSIONS = [
		{id: 1, name: "Mars Rover", status: "Planned", crew: ["Alice", "Bob"]},
		{id: 2, name: "Moon Base", status: "Active", crew: ["Charlie", "Dave"]},
		{id: 3, name: "Venus Observatory", status: "Planned", crew: ["Eve", "Frank"]},
		{id: 4, name: "Jupiter Moons Survey", status: "Completed", crew: ["Grace", "Hank"]},
		{id: 5, name: "Asteroid Belt Mining", status: "Active", crew: ["Ivy", "John"]},
		{id: 6, name: "Saturn Ring Research", status: "Planned", crew: ["Karen", "Leo"]},
		{id: 7, name: "Deep Space Probe", status: "Completed", crew: ["Mia", "Nolan"]},
		{id: 8, name: "Interstellar Observatory", status: "Planned", crew: ["Olivia", "Pete"]},
		{id: 9, name: "Neptune Atmospheric Study", status: "Active", crew: ["Quinn", "Rachel"]},
		{id: 10, name: "Pluto Reclamation", status: "Planned", crew: ["Sam", "Tina"]}
	];

	const [missions, setMissions] = useState({currentMissions: INITIAL_MISSIONS, display: 'All'});

	const changeStatus = (id, newStatus) => {
		setMissions(
			prev => ({
				...prev,
				currentMissions: prev.currentMissions.map(m => m.id === id ? {...m, status: newStatus} : m)
			})
		);
	};

	const updateFilter = (ev) => {
		const missionsToShow = ev.target.id;
		setMissions(prev => ({
			...prev,
			display: missionsToShow,
		}));
	}

	const filteredMissions = missions.currentMissions.filter((m) => {
		if (missions.display === 'All') return true;
		else return (missions.display === m.status);
	})
	
	console.log(filteredMissions);
	
	return (
		<div id='mission-control'>
			<h1 id="mission-control-title">Space Mission Control</h1>
			<MissionFilter updateFilter={updateFilter}></MissionFilter>
			{filteredMissions.map(
				({id, name, status, crew}) => (
					<div className="MissionCard-container"  key={`${id}-container`}>
						<MissionCard key={`${id}-card`} name={name} status={status} crew={crew}></MissionCard>
						<MissionAction key={`${id}-action`} id={id} changeStatus={changeStatus}></MissionAction>
					</div>	
			))}
		</div>
	);

}

export default MissionControl;