import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlanetContent from "./PlanetContent";
import PlanetFacts from "./PlanetFacts";

type PlanetProps = {
	mobile: boolean;
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
	mobile,
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
							{!mobile && <span>01</span>}
							<span>Overview</span>
						</TabsTrigger>
						<TabsTrigger value="structure">
							{!mobile && <span>02</span>}
							<span>{`${!mobile && "Internal "}Structure`}</span>
						</TabsTrigger>
						<TabsTrigger value="geology">
							{!mobile && <span>03</span>}
							<span>{`${!mobile && "Surface "}Geology`}</span>
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
			<PlanetFacts
				rotation={rotation}
				revolution={revolution}
				radius={radius}
				temperature={temperature}
			/>
		</div>
	);
};

export default Planet;
