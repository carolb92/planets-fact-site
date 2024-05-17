import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				antonio: ["var(--font-antonio)"],
				leagueSpartan: ["var(--font-league-spartan)"],
			},
			colors: {
				"dark-gray": "#38384F",
				"light-gray": "#838391",
				teal: "#419EBB",
				"light-orange": "#EDA249",
				purple: "#6F2ED6",
				"dark-orange": "#D14C32",
				red: "#D83A34",
				"burnt-orange": "#CD5120",
				green: "#1EC2A4",
				blue: "#2D68F0",
				"night-sky": "#070724",
				"gray-blue": "#DEF4FC",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: false,
		// [
		// 	{
		// 		planetary: {
		// 			...require("daisyui/src/theming/themes")["planetary"],
		// 			darkGray: "#38384F",
		// 			lightGray: "#838391",
		// 			teal: "#419EBB",
		// 			lightOrange: "#EDA249",
		// 			purple: "#6F2ED6",
		// 			darkOrange: "#D14C32",
		// 			red: "#D83A34",
		// 			burntOrange: "#CD5120",
		// 			green: "#1EC2A4",
		// 			blue: "#2D68F0",
		// 			nightSky: "#070724",
		// 			grayBlue: "#DEF4FC",
		// 		},
		// 	},
		// ],
	},
};
export default config;
