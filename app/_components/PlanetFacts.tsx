function PlanetFactContainer({
	title,
	value,
}: {
	title: string;
	value: string;
}) {
	return (
		<div className="flex w-full border border-[#D8D8D8]/20 justify-between items-center px-4 py-3 md:flex-col md:w-[185px] md:items-start md:gap-y-4 md:p-5">
			<span className="uppercase text-xs font-semibold tracking-wide font-league-spartan text-light-gray">
				{title}
			</span>
			<span className="uppercase font-antonio text-xl font-medium lg:text-3xl">
				{value}
			</span>
		</div>
	);
}

function processTitle(title: string) {
	if (title === "rotation" || title === "revolution") return `${title} time`;
	else if (title === "temperature") return "average temp.";
	else return title;
}

export type PlanetFacts = {
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
};

export default function PlanetFacts({ facts }: { facts: PlanetFacts }) {
	return (
		<div className="flex flex-col gap-4 px-10 pb-10 md:flex-row md:w-full md:justify-around md:mt-5 lg:items-center lg:gap-x-4 lg:mt-10">
			{Object.entries(facts).map(([key, value]) => {
				const title = processTitle(key);
				return <PlanetFactContainer title={title} value={value} key={title} />;
			})}
		</div>
	);
}
