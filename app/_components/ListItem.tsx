import Link from "next/link";

type ListItemProps = {
	planet: string;
};

type ColorVariants = {
	[key: string]: string;
};

function ListItem({ planet }: ListItemProps) {
	const colorVariants: ColorVariants = {
		mercury: "bg-gray-blue",
		venus: "bg-light-orange",
		earth: "bg-blue",
		mars: "bg-red",
		jupiter: "bg-dark-orange",
		saturn: "bg-light-orange",
		uranus: "bg-green",
		neptune: "bg-blue",
	};

	console.log(colorVariants[planet.toLowerCase()]);
	return (
		<>
			<li className="p-4">
				<Link href={`/${planet}`} className="flex p-4 pl-0 items-center">
					<div
						className={`h-5 w-5 rounded-full mr-6 ${
							colorVariants[planet.toLowerCase()]
						}`}
					></div>
					<span className="flex justify-between w-full items-center">
						<span className="uppercase text-sm font-leagueSpartan tracking-widest">
							{planet}
						</span>
						<span className="">
							<svg
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path opacity="0.4" d="M1 1L5 5L1 9" stroke="white" />
							</svg>
						</span>
					</span>
				</Link>
			</li>
			{
				// if the planet is not neptune, return an hr element
				planet.toLowerCase() !== "neptune" && (
					<hr className="border-[#979797]" />
				)
			}
		</>
	);
}

export default ListItem;
