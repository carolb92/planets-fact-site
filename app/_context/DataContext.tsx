"use client";
import React, { createContext, useContext, ReactNode } from "react";

interface DataContextProps {
	data: any[];
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider = ({
	children,
	data,
}: {
	children: ReactNode;
	data: any[];
}) => {
	return (
		<DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
	);
};

export const useData = () => {
	const context = useContext(DataContext);
	if (!context) {
		throw new Error("useData must be used within a DataProvider");
	}
	return context;
};
