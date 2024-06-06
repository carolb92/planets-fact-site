"use client";
import React, { useContext } from "react";
import { useData } from "../_context/DataContext";
import Planet from "../_components/Planet";

const Mercury = () => {
	const { data } = useData();
	console.log(data);
	const mercury = data.find((planet) => planet.name === "Mercury");
	console.log(mercury);
	return (
		<div>
			<Planet
				// mobile={false}
				planet={mercury.name}
				overview={mercury.overview}
				structure={mercury.structure}
				geology={mercury.geology}
				rotation={mercury.rotation}
				revolution={mercury.revolution}
				radius={mercury.radius}
				images={mercury.images}
				temperature={mercury.temperature}
			/>
		</div>
	);
};

export default Mercury;
