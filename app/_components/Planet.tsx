import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlanetContent from "./PlanetContent";
import PlanetFacts from "./PlanetFacts";

type PlanetProps = {
	// mobile: boolean;
	planet: string;
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
const Planet: React.FC<PlanetProps> = ({
	// mobile,
	planet,
	overview,
	structure,
	geology,
	rotation,
	revolution,
	radius,
	temperature,
	images,
}) => {
	return (
		<div className="max-w-full">
			<div className="flex">
				<Tabs defaultValue="overview">
					<TabsList>
						<TabsTrigger value="overview">
							<span className="max-sm:hidden">01</span>
							<span>Overview</span>
						</TabsTrigger>
						<TabsTrigger value="structure">
							<span className="max-sm:hidden">02</span>
							{/* <span>{`${!mobile && "Internal "}Structure`}</span> */}
							<span className="max-sm:hidden">Internal </span>
							<span>Structure</span>
						</TabsTrigger>
						<TabsTrigger value="geology">
							<span className="max-sm:hidden">03</span>
							<span className="max-sm:hidden">Surface </span>
							<span>Geology</span>
						</TabsTrigger>
					</TabsList>
					<TabsContent value="overview">
						<PlanetContent
							planet={planet}
							content={overview.content}
							source={overview.source}
							image={images.planet}
						/>
					</TabsContent>
					<TabsContent value="structure">
						<PlanetContent
							planet={planet}
							content={structure.content}
							source={structure.source}
							image={images.internal}
						/>
					</TabsContent>
					<TabsContent value="geology">
						<PlanetContent
							planet={planet}
							content={geology.content}
							source={geology.source}
							image={images.geology}
						/>
					</TabsContent>
				</Tabs>
			</div>
			<div>
				<PlanetFacts
					rotation={rotation}
					revolution={revolution}
					radius={radius}
					temperature={temperature}
				/>
			</div>
		</div>
	);
};

export default Planet;
