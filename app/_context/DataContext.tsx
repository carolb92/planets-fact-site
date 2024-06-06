"use client";
import React, { createContext, useContext, ReactNode } from "react";

// define the shape of the context data
interface DataContextProps {
	data: any[];
}

// create context with an initial value of undefined
const DataContext = createContext<DataContextProps | undefined>(undefined);

// define the provider component
export const DataProvider = ({
	children,
	data,
}: {
	children: ReactNode;
	data: any[];
}) => {
	return (
		// two sets of curly braces bc data is an object literal
		// value={{ data }} set the value prop of the Provider to an object containing the data property
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	);
};

// define the hook to access the context
export const useData = () => {
	// access the nearest DataContext.Provider above in the component tree and retrieve its value
	const context = useContext(DataContext);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
};
