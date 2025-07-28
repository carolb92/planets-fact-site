"use client";
import { useMemo } from "react";
import {
	getGeneralPlanetFacts,
	getPlanetSectionData,
	getPlanetImages,
} from "../_actions/planetData";
import { PlanetName, SectionName } from "../_types";

export function usePlanetData(planetName: PlanetName) {
	return useMemo(
		() => ({
			facts: getGeneralPlanetFacts(planetName),
			sectionData: (section: SectionName) =>
				getPlanetSectionData(planetName, section),
			images: getPlanetImages(planetName),
		}),
		[planetName]
	);
}
