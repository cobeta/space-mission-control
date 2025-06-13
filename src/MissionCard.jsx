import './MissionCard.css';

function MissionCard ({ id, name, status, crew }) 
{
	return (
		<div className="MissionCard" id={`${id}-card`}>
			<div className="MissionCard-data">
				<h2>{name}</h2>
				<p>Status: {status}</p>
				<p>Crew: {crew.join(', ')}</p>
			</div>
		</div>




	);
}

export default MissionCard;
