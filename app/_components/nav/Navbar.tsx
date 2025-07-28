"use client";
import { useState } from "react";
import ListItem from "./ListItem";
import Image from "next/image";
// import { useData } from "../../_context/DataContext";
import { planetsData } from "@/app/_actions/planetData";

// type NavbarData = {
// 	name: string;
// 	overview: {
// 		content: string;
// 		source: string;
// 	};
// 	structure: {
// 		content: string;
// 		source: string;
// 	};
// 	geology: {
// 		content: string;
// 		source: string;
// 	};
// 	rotation: string;
// 	revolution: string;
// 	radius: string;
// 	temperature: string;
// 	images: {
// 		planet: string;
// 		internal: string;
// 		geology: string;
// 	};
// };

// type NavbarProps = NavbarData[];

function Navbar() {
	const [open, setOpen] = useState(false);
	// TODO: transition effect on menu opening

	function handleClick() {
		setOpen((open) => !open);
	}

	// const { data } = useData();
	return (
		<nav className="w-full md:py-3 lg:flex justify-between items-center lg:pt-0 bg-night-sky">
			<div className="flex justify-between p-6 border-b border-light-gray md:justify-center md:border-none md:p-8">
				<a
					href="/"
					className="font-antonio text-lg font-bold uppercase tracking-wide md:text-[28px] md:font-medium"
				>
					THE PLANETS
				</a>
				{/* <ul className="flex max-md:hidden">
          {data.map((dataItem) => (
            <ListItem planet={dataItem.name} key={dataItem.name} />
          ))}
        </ul> */}
				<div className="pr-1 md:hidden" role="button" onClick={handleClick}>
					<Image
						src="/icon-hamburger.svg"
						alt="hamburger icon"
						width={25}
						height={25}
					/>
				</div>
			</div>
			{/* // mobile view  */}
			{open && (
				<div className="absolute top-[82px] left-0 w-full min-h-screen bg-night-sky z-50 md:hidden">
					<ul className="py-2">
						{planetsData.map((dataItem) => (
							<ListItem
								planet={dataItem.name}
								key={dataItem.name}
								onClick={handleClick}
							/>
						))}
					</ul>
				</div>
			)}
			{/* tablet and above */}
			<div className="max-sm:hidden flex justify-evenly border-b border-light-gray p-3 lg:border-none lg:pt-0">
				<ul className="flex">
					{planetsData.map((dataItem) => (
						<ListItem planet={dataItem.name} key={dataItem.name} />
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
