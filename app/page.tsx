import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-full grow px-10 md:px-24 pt-6 lg:pt-3">
			<h1 className="font-antonio text-3xl pb-8 uppercase text-center tracking-wide">
				Welcome to the planets fact site
			</h1>
			<p className="font-leagueSpartan tracking-wide text-center text-lg">
				Navigate to your favorite planet to learn more about its internal
				structure, surface geology, and general facts.
			</p>
			<Image
				src="/astronaut.png"
				alt="Cartoon astronaut floating in space holding planet-shaped balloons"
				width={500}
				height={500}
			/>
		</main>
	);
}
