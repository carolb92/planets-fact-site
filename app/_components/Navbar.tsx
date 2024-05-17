"use client";
import { useState } from "react";
import ListItem from "./ListItem";

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
		<nav className="w-full">
			<div className="flex justify-between p-4 border-b border-light-gray">
				<h1 className="font-antonio text-lg font-bold uppercase">
					THE PLANETS
				</h1>
				{/* <ul className="flex max-md:hidden">
					{data.map((dataItem) => (
						<ListItem planet={dataItem.name} key={dataItem.name} />
					))}
				</ul> */}
				<div
					className="pr-1"
					role="button"
					onClick={(e) => setOpen((open) => !open)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</div>
			</div>
			{open && (
				<div>
					<ul className="py-2">
						{data.map((dataItem) => (
							<ListItem planet={dataItem.name} key={dataItem.name} />
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
