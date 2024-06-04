"use client";
import { useState } from "react";
import ListItem from "./ListItem";
import Image from "next/image";

type NavbarData = {
	name: string;
	overview: {
		content: string;
		source: string;
	};
	structure: {
		content: string;
		source: string;
	};
	geology: {
		content: string;
		source: string;
	};
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: {
		planet: string;
		internal: string;
		geology: string;
	};
};

type NavbarProps = NavbarData[];

function Navbar({ data }: { data: NavbarProps }) {
	const [open, setOpen] = useState(false);

	return (
		<nav className="w-full md:py-3 lg:flex justify-between items-center lg:pt-0">
			<div className="flex justify-between p-4 border-b border-light-gray md:justify-center md:border-none md:p-8">
				<h1 className="font-antonio text-lg font-bold uppercase tracking-wide md:text-[28px] md:font-medium">
					THE PLANETS
				</h1>
				{/* <ul className="flex max-md:hidden">
          {data.map((dataItem) => (
            <ListItem planet={dataItem.name} key={dataItem.name} />
          ))}
        </ul> */}
				<div
					className="pr-1 md:hidden"
					role="button"
					onClick={(e) => setOpen((open) => !open)}
				>
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
				<div className="md:hidden">
					<ul className="py-2">
						{data.map((dataItem) => (
							<ListItem planet={dataItem.name} key={dataItem.name} />
						))}
					</ul>
				</div>
			)}
			{/* tablet and above */}
			<div className="max-sm:hidden flex justify-evenly border-b border-light-gray p-3 lg:border-none lg:pt-0">
				<ul className="flex">
					{data.map((dataItem) => (
						<ListItem planet={dataItem.name} key={dataItem.name} />
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
