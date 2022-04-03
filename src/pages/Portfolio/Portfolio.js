import React from "react";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { PortfolioBanner } from "./components/PortfolioBanner/PortfolioBanner";

export const Portfolio = () => {
    return (
        <>
            <PortfolioBanner />
            <Benefits />
            <Connection />
        </>
    );
};
