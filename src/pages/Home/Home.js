import React from "react";
import { Banner } from "./components/Banner/Banner";
import { Benefits } from "./components/Benefits/Benefits";
import { Connection } from "./components/Connection/Connection";
import { Services } from "./components/Services/Services";
import { Welcome } from "./components/Welcome/Welcome";

export const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Benefits />
            <Welcome />
            <Connection />
        </>
    );
};
