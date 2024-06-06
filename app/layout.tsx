import type { Metadata } from "next";
import "./globals.css";
import { Antonio, League_Spartan } from "next/font/google";
import Navbar from "./_components/Navbar";
import { promises as fs } from "fs";
import React from "react";
import { DataProvider } from "./_context/DataContext";

const antonio = Antonio({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-antonio",
});

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700"],
	variable: "--font-league-spartan",
});

export const metadata: Metadata = {
	title: "Planet Facts",
	description: "a simple site to learn about the planets in our solar system",
};

export default async function RootLayout(
	{
		children,
	}: Readonly<{
		// children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
		children: React.ReactNode;
	}>,
	...pageProps: any
) {
	// read the data.json file
	// the readFile function returns the contents as a string
	// the process.cwd function gets the current working directory, to which we append the relative path to our file
	// the utf8 argument tells Node to interpret the file as a UFT-8 encoded text file
	const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
	// use JSON.parse to turn the contents returned from the readFile function into an object
	const data = JSON.parse(file);

	return (
		<html lang="en">
			{/* data-theme={"planetary"} */}
			<body
				className={`${antonio.variable} ${leagueSpartan.variable} bg-night-sky bg-[url('/background-stars.svg')] text-white box-border min-h-screen flex flex-col`}
			>
				<DataProvider data={data}>
					<Navbar />
					<div className="flex grow max-w-full">{children}</div>
				</DataProvider>
			</body>
		</html>
	);
}
