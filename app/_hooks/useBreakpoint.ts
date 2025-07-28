import { useState, useEffect } from "react";

const BREAKPOINTS = {
	mobile: 768,
	tablet: 1024,
};

export type Breakpoint = "mobile" | "tablet" | "desktop";

export function useBreakpoint(): Breakpoint {
	const [breakpoint, setBreakpoint] = useState<Breakpoint>(() => {
		if (typeof window === "undefined") return "desktop"; // default for SSR
		return getBreakpoint(window.innerWidth);
	});

	useEffect(() => {
		const mobileQuery = window.matchMedia(
			`(max-width: ${BREAKPOINTS.mobile - 1}px)`
		);
		const tabletQuery = window.matchMedia(
			`(max-width: ${BREAKPOINTS.tablet - 1}px)`
		);

		function updateBreakpoint() {
			if (mobileQuery.matches) setBreakpoint("mobile");
			else if (tabletQuery.matches) setBreakpoint("tablet");
			else setBreakpoint("desktop");
		}

		mobileQuery.addEventListener("change", updateBreakpoint);
		tabletQuery.addEventListener("change", updateBreakpoint);

		// set the breakpoint on first render
		updateBreakpoint();

		// cleanup
		return () => {
			mobileQuery.removeEventListener("change", updateBreakpoint);
			tabletQuery.removeEventListener("change", updateBreakpoint);
		};
	}, []);
	return breakpoint;
}

function getBreakpoint(width: number): Breakpoint {
	if (width < BREAKPOINTS.mobile) return "mobile";
	if (width < BREAKPOINTS.tablet) return "tablet";
	return "desktop";
}
