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
		<>
			<div className="flex flex-col">
				<Image alt={`${planet} cartoon`} src={image} height={300} width={300} />
			</div>
			<h2>{planet}</h2>
			<p>{content}</p>
			<span>
				Source:
				<Link href={source}>
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
		</>
	);
};

export default PlanetContent;
