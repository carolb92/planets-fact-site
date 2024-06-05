import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
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
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
