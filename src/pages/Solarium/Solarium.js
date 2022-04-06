import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import solariumBanner from "../../shared/images/Solarium/solariumBanner.png";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { SolariumPrice } from "./components/SolariumPrice";

export const Solarium = () => {
    return (
        <>
            <BannerItem
                title="солярий в салоне красоты simada"
                text="Комфортный и качественный загар."
                image={solariumBanner}
            />
            <SolariumPrice />
            <Benefits />
            <Connection />
        </>
    );
};
