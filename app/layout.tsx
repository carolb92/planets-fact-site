import type { Metadata } from "next";
import "./globals.css";
import { Antonio, League_Spartan } from "next/font/google";
import Navbar from "./_components/nav/Navbar";
import React from "react";

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${antonio.variable} ${leagueSpartan.variable} bg-night-sky bg-[url('/background-stars.svg')] text-white box-border min-h-screen flex flex-col`}
			>
				<Navbar />
				<div className="flex grow max-w-full lg:mx-[150px]">{children}</div>
			</body>
		</html>
	);
}
