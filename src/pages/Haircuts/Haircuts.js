import React from "react";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { HaircutsBanner } from "./components/HaircutsBanner/HaircutsBanner";
import { HaircutsPortfolio } from "./components/HaircutsPortfolio/HaircutsPortfolio";
import { HaircutsPrice } from "./components/HaircutsPrice/HaircutsPrice";

export const Haircuts = () => {
    return (
        <>
            <HaircutsBanner />
            <HaircutsPortfolio />
            <HaircutsPrice />
            <Benefits />
            <Connection />
        </>
    );
};
