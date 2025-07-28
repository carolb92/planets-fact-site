import { getPlanetSectionData } from "../_actions/planetData";
import Image from "next/image";
import Link from "next/link";
import { PlanetName, SectionName } from "../_types";

type PlanetContentProps = {
	planet: PlanetName;
	// activeSection: string;
	sectionData: {
		content: string;
		source: string;
	};
};
export default function PlanetContent({
	planet,
	// activeSection,
	sectionData,
}: PlanetContentProps) {
	// function processSection(sectionName: string) {
	// 	const sectionNameArr = sectionName.split(" ");
	// 	if (sectionNameArr.length > 1) return sectionNameArr[1];
	// 	return sectionName;
	// }

	// const section = processSection(activeSection);

	// const sectionContent = getPlanetSectionData(planet, section as SectionName);
	// const textContent = sectionContent.content;
	// const source = sectionContent.source;
	return (
		<div className="flex flex-col justify-center items-center mx-[30px] gap-y-5 md:items-start lg:mx-0 lg:gap-y-3 lg:mb-4">
			<h1 className="font-antonio font-medium text-[40px] text-center uppercase md:text-start lg:text-[3.5rem]">
				{planet}
			</h1>
			<p className="font-leagueSpartan text-sm text-center font-normal leading-6 md:text-start md:text-base">
				{sectionData.content}
			</p>
			<span className="text-white/50 flex gap-x-1 text-sm">
				Source:
				<Link
					href={sectionData.source}
					className="flex gap-2 underline items-center"
					target="_blank"
				>
					<span>Wikipedia</span>
					<span className="h-fit">
						<Image
							alt="source icon"
							src="/icon-source.svg"
							height={20}
							width={20}
						/>
					</span>
				</Link>
			</span>
		</div>
	);
}
