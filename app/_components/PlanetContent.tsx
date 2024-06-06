import React from "react";
import Image from "next/image";
import Link from "next/link";

type PlanetContentProps = {
	planet: string;
	content: string;
	source: string;
	image: string;
};

const PlanetContent: React.FC<PlanetContentProps> = ({
	planet,
	content,
	source,
	image,
}) => {
	return (
		<div className="flex flex-col justify-between items-center p-10 pt-20 gap-6">
			<div>
				<Image
					alt={`${planet} cartoon`}
					src={image}
					height={100}
					width={100}
					className="py-5"
				/>
			</div>
			<h2 className="text-4xl font-antonio font-medium uppercase">{planet}</h2>
			<p className="text-spartan text-sm leading-6">{content}</p>
			<span className="flex gap-2">
				Source:
				<Link href={source} className="flex gap-2 underline">
					<span>Wikipedia</span>
					<span>
						<Image
							alt="source icon"
							src="/icon-source.svg"
							height={20}
							width={20}
						/>
					</span>
				</Link>
			</span>
		</div>
	);
};

export default PlanetContent;
