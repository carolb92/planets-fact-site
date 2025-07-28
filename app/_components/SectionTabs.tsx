import { useBreakpoint } from "../_hooks/useBreakpoint";
import React from "react";
import { PlanetName, TabName } from "../_types";
import useColorVariants from "../_hooks/useColorVariants";

const tabNames = ["overview", "internal structure", "surface geology"];

export function Tab({
	tabName,
	activeBorder,
	activeBg,
	activeTab,
	setActiveTab,
	index,
	planetName,
}: {
	tabName: TabName;
	activeBorder?: string;
	activeBg?: string;
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<TabName>>;
	index: number;
	planetName: PlanetName;
}) {
	const breakpoint = useBreakpoint();
	const isMobile = breakpoint === "mobile";
	const isActiveTab = activeTab === tabName;
	const indexDisplay = `0${index + 1}`;
	const { getColorVariant } = useColorVariants(planetName);

	const borderColor = getColorVariant("border");
	const bgColor = getColorVariant("bg");

	function handleClick() {
		setActiveTab(tabName.toLowerCase() as TabName);
	}

	return isMobile ? (
		// mobile tabs
		<div
			onClick={handleClick}
			className={`uppercase font-leagueSpartan text-xs px-2 py-4 flex items-center justify-center tracking-[1.93px] ${
				isActiveTab
					? `text-white border-b-[3px] ${borderColor}` // border-b-teal
					: "text-gray-400 border-b-0"
			}`}
		>
			{tabName}
		</div>
	) : (
		<div
			className={`tracking-[2.57px] items-center uppercase cursor-pointer w-[350px] h-[48px] flex gap-x-8 px-6 font-leagueSpartan font-semibold text-sm ${
				isActiveTab
					? `${bgColor} text-white` //bg-teal
					: "bg-transparent border border-[#D8D8D8]/20" //TODO: add border color to tailwind config
			}`}
			onClick={handleClick}
		>
			<span className="text-gray-400">{indexDisplay}</span>
			<span className="">{tabName}</span>
		</div>
	);
}

type SectionTabsProps = {
	activeTab: TabName;
	setActiveTab: React.Dispatch<React.SetStateAction<TabName>>;
	planetName: PlanetName;
};

export default function SectionTabs({
	activeTab,
	setActiveTab,
	planetName,
}: SectionTabsProps) {
	return (
		<div className="flex justify-around border-b border-[#D8D8D8]/20 w-full md:border-none md:flex-col md:gap-y-3 md:justify-center">
			{tabNames.map((tab, index) => {
				return (
					<Tab
						key={tab}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						tabName={tab as TabName}
						index={index}
						planetName={planetName}
					/>
				);
			})}
		</div>
	);
}
