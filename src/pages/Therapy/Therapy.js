import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import therapyBanner from "../../shared/images/Therapy/therapyBanner.png";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { TherapyPrice } from "./components/TherapyPrice/TherapyPrice";

export const Therapy = () => {
    return (
        <>
            <BannerItem
                title="эндосфера Терапия"
                text="6 видов массажа за одну процедуру"
                image={therapyBanner}
            />
            <TherapyPrice />
            <Benefits />
            <Connection />
        </>
    );
};
