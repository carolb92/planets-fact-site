"use client";
import PlanetContent from "./PlanetContent";
import PlanetFacts from "./PlanetFacts";
import SectionTabs from "./SectionTabs";
import { useState } from "react";
import { SectionName, PlanetName, TabName } from "../_types";
import { usePlanetData } from "../_hooks/usePlanetData";
import PlanetImage from "./PlanetImage";
import { useBreakpoint } from "../_hooks/useBreakpoint";

const Planet = ({ planet }: { planet: PlanetName }) => {
	const breakpoint = useBreakpoint();

	const { facts, images, sectionData } = usePlanetData(
		planet.toLowerCase() as PlanetName
	);

	function processSection(sectionName: string) {
		const sectionNameArr = sectionName.split(" ");
		if (sectionNameArr.length > 1) return sectionNameArr[1];
		return sectionName;
	}

	const [activeTab, setActiveTab] = useState<TabName>("overview");
	const section = processSection(activeTab);

	return breakpoint === "mobile" ? (
		<div className="max-w-full flex flex-col justify-between min-h-full">
			<SectionTabs
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				planetName={planet}
			/>
			<PlanetImage
				planetName={planet}
				images={images}
				activeSection={activeTab}
			/>
			<PlanetContent
				planet={planet.toLowerCase() as PlanetName}
				sectionData={sectionData(section as SectionName)}
			/>
			<PlanetFacts facts={facts} />
		</div>
	) : (
		<div className="flex flex-col h-full lg:w-full lg:items-center md:justify-between">
			<div className="flex flex-col lg:flex-row md:h-full lg:w-full lg:justify-between xl:justify-around lg:items-center lg:gap-y-8 md:justify-around">
				<div className="w-full lg:h-1/2 flex justify-center items-center lg:w-1/3">
					<PlanetImage
						planetName={planet}
						images={images}
						activeSection={activeTab}
					/>
				</div>
				<div className="flex lg:flex-col md:mx-[30px] lg:gap-y-2 lg:items-start lg:w-[350px] lg:mx-0 xl:w-[375px]">
					<PlanetContent
						planet={planet.toLowerCase() as PlanetName}
						sectionData={sectionData(section as SectionName)}
					/>
					<SectionTabs
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						planetName={planet}
					/>
				</div>
			</div>
			<PlanetFacts facts={facts} />
		</div>
	);
};

export default Planet;
