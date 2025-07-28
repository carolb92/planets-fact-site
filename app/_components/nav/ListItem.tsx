"use client";
import Link from "next/link";
import useColorVariants from "../../_hooks/useColorVariants";

type ListItemProps = {
	planet: string;
	onClick?: () => void;
};

function ListItem({ planet, onClick }: ListItemProps) {
	const { getColorVariant } = useColorVariants(planet);

	return (
		<>
			<li
				className={`p-4 md:p-2 lg:flex justify-center lg:py-6 hover:border-t-4 ${getColorVariant(
					"border"
				)} hover:cursor-pointer`}
				onClick={onClick}
			>
				<Link
					href={`/${planet.toLowerCase()}`}
					className={`flex p-4 pl-0 items-center lg:p-2 lg:pt-4`}
				>
					<div
						className={`h-5 w-5 rounded-full mr-6 ${getColorVariant(
							"bg"
						)} md:hidden`}
					></div>
					<span className="flex justify-between w-full items-center">
						<span className="uppercase text-sm font-leagueSpartan tracking-widest">
							{planet}
						</span>
						<span className="md:hidden">
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
			{/* {
				// if the planet is not neptune, return an hr element
				planet.toLowerCase() !== "neptune" && (
					<hr className="border-[#979797]" />
				)
			} */}
			<hr className="border-[#979797]" />
		</>
	);
}

export default ListItem;
