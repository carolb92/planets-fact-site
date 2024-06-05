import React from "react";

type PlanetFactsProps = {
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
};

const PlanetFacts: React.FC<PlanetFactsProps> = ({
	rotation,
	revolution,
	radius,
	temperature,
}) => {
	return (
		<div>
			<div>
				<span>Rotation Time</span>
				<span>{rotation}</span>
			</div>
			<div>
				<span>Revolution Time</span>
				<span>{revolution}</span>
			</div>
			<div>
				<span>Radius</span>
				<span>{radius}</span>
			</div>
			<div>
				<span>Average Temp.</span>
				<span>{temperature}</span>
			</div>
		</div>
	);
};

export default PlanetFacts;
