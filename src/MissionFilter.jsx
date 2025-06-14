import './MissionFilter.css';

function MissionFilter ({ updateFilter }) 
{
	return (
		<div className="MissionFilter" >
			<button id='Planned' className='MissionFilter-button' onClick={updateFilter}>Planned</button>
			<button id='Active' className='MissionFilter-button' onClick={updateFilter}>Active</button>
			<button id='Completed' className='MissionFilter-button' onClick={updateFilter}>Completed</button>
			<button id='All' className='MissionFilter-button' onClick={updateFilter}>All</button>
		</div>




	);
}

export default MissionFilter;