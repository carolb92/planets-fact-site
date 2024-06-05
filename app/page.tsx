import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-full grow px-10 md:px-24 lg:pt-24 xl:pt-10">
			{/* min-h-screen */}
			{/* max-h-screen */}
			<h2 className="font-antonio text-3xl pb-8 uppercase text-center tracking-wide">
				Welcome to the planets fact site!
			</h2>
			<p className="font-leagueSpartan tracking-wide text-justify text-lg">
				Navigate to your favorite planet to learn more about its structure,
				surface, and general facts.
			</p>
			{/* <div className="flex items-center justify-center"> */}
			<Image
				src="/astronaut.png"
				alt="Astronaut floating in space"
				width={500}
				height={500}
				// className="pt-6"
			/>
			{/* </div> */}
		</main>
	);
}
