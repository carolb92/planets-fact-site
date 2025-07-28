import { useCallback } from "react";

type ColorVariants = {
	[key: string]: string[];
};

type Property = "bg" | "border";

const colorVariants: ColorVariants = {
	mercury: ["bg-teal", "border-teal"],
	venus: ["bg-light-orange", "border-light-orange"],
	earth: ["bg-blue", "border-blue"],
	mars: ["bg-red", "border-red"],
	jupiter: ["bg-dark-orange", "border-dark-orange"],
	saturn: ["bg-light-orange", "border-light-orange"],
	uranus: ["bg-green", "border-green"],
	neptune: ["bg-blue", "border-blue"],
};

const useColorVariants = (planet: string) => {
	const getColorVariant = useCallback(
		(property: Property, isActiveState?: boolean) => {
			const variant = colorVariants[planet.toLowerCase()];
			return property === "bg" ? variant[0] : variant[1];
		},
		[planet]
	);
	return { getColorVariant };
};

export default useColorVariants;
