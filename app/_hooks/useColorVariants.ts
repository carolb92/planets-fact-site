import { useCallback } from "react";

type ColorVariants = {
	[key: string]: string[];
};

type Property = "bg" | "border";

const colorVariants: ColorVariants = {
	mercury: ["bg-gray-blue", "border-gray-blue"],
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
			if (isActiveState && property === "border") {
				return `max-sm:data-[state=active]:border-b-2 max-sm:data-[state=active]:${variant[1]}`;
			}
			if (isActiveState && property === "bg") {
				return `md:data-[state=active]:${variant[0]}`;
			}
			return property === "bg" ? variant[0] : variant[1];
		},
		[planet]
	);
	return { getColorVariant };
};

export default useColorVariants;
