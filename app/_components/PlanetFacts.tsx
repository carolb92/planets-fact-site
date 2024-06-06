import React from "react";

type PlanetFactsProps = {
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
};

//TODO: refactor this to list item components?

const PlanetFacts: React.FC<PlanetFactsProps> = ({
	rotation,
	revolution,
	radius,
	temperature,
}) => {
	return (
		<div className="flex flex-col gap-4 px-10 pb-10">
			<div className="flex w-full border justify-between items-center px-4 py-3">
				<span className="uppercase text-sm font-league-spartan">
					Rotation Time
				</span>
				<span className="uppercase font-antonio text-xl font-medium">
					{rotation}
				</span>
			</div>
			<div className="flex w-full border justify-between items-center px-4 py-3">
				<span className="uppercase text-sm font-spartan">Revolution Time</span>
				<span className="uppercase font-antonio text-xl font-medium">
					{revolution}
				</span>
			</div>
			<div className="flex w-full border justify-between items-center px-4 py-3">
				<span className="uppercase text-sm font-spartan">Radius</span>
				<span className="uppercase font-antonio text-xl font-medium">
					{radius}
				</span>
			</div>
			<div className="flex w-full border justify-between items-center px-4 py-3">
				<span className="uppercase text-sm font-spartan">Average Temp.</span>
				<span className="uppercase font-antonio text-xl font-medium">
					{temperature}
				</span>
			</div>
		</div>
	);
};

export default PlanetFacts;
