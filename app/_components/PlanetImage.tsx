import { type PlanetName, TabName } from "../_types";
import Image from "next/image";
import { useBreakpoint } from "../_hooks/useBreakpoint";

type PlanetProps = {
	images: { planet: string; internal: string; geology: string };
	activeSection: TabName;
	planetName: PlanetName;
};

type SurfaceGeologyImageProps = {
	images: { planet: string; internal: string; geology: string };
	alt: string;
	planetName: PlanetName;
	dimensions: number;
	breakpoint: "mobile" | "tablet" | "desktop";
};

export function SurfaceGeologyImage({
	images,
	alt,
	planetName,
	dimensions,
	breakpoint,
}: SurfaceGeologyImageProps) {
	const geologyDimensions = breakpoint === "mobile" ? 75 : 125;
	return (
		<div className="relative max-sm:my-7">
			<Image
				src={images.planet}
				alt={alt}
				width={dimensions}
				height={dimensions}
			/>
			<Image
				src={images.geology}
				alt={`${planetName} surface geology`}
				className="absolute z-10 bottom-[-35%] left-[30%]"
				width={geologyDimensions}
				height={geologyDimensions}
			/>
		</div>
	);
}

export default function PlanetImage({
	images,
	activeSection,
	planetName,
}: PlanetProps) {
	function getSrc(activeSection: TabName) {
		if (activeSection === "overview") return images.planet;
		else if (activeSection === "internal structure") return images.internal;
		else return images.geology;
	}

	const src = getSrc(activeSection);
	const alt = `${planetName} cartoon image`;

	const breakpoint = useBreakpoint();
	const dimensions = breakpoint === "mobile" ? 100 : 200;

	return (
		<div className="flex justify-center ">
			{activeSection === "surface geology" ? (
				<SurfaceGeologyImage
					images={images}
					alt={alt}
					planetName={planetName}
					dimensions={dimensions}
					breakpoint={breakpoint}
				/>
			) : (
				<Image
					alt={alt}
					src={src}
					className="py-5 "
					width={dimensions}
					height={dimensions}
				/>
			)}
		</div>
	);
}
