import React from "react";
import { Connection } from "../Home/components/Connection/Connection";
import { SpecBanner } from "./components/SpecBanner.js/SpecBanner";
import { SpecStaff } from "./components/SpecStaff/SpecStaff";

export const Spec = () => {
    return (
        <>
            <SpecBanner />
            <SpecStaff />
            <Connection />
        </>
    );
};
