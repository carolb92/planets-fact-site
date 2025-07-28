export type Planet = {
	name: string;
	overview: {
		content: string;
		source: string;
	};
	structure: {
		content: string;
		source: string;
	};
	geology: {
		content: string;
		source: string;
	};
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: {
		planet: string;
		internal: string;
		geology: string;
	};
};

export type PlanetName =
	| "mercury"
	| "venus"
	| "earth"
	| "mars"
	| "jupiter"
	| "saturn"
	| "uranus"
	| "neptune";

export type SectionName = "overview" | "structure" | "geology";

export type TabName = "overview" | "internal structure" | "surface geology";
