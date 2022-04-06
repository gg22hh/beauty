import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import makeupBanner from "../../shared/images/Makeup/makeupBanner.png";
import makeup1 from "../../shared/images/Makeup/makeup1.jpg";
import makeup2 from "../../shared/images/Makeup/makeup2.jpg";
import makeup3 from "../../shared/images/Makeup/makeup3.jpg";
import { MakeupPrice } from "./components/MakeupPrice";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";

export const Makeup = () => {
    return (
        <>
            <BannerItem
                title="Визаж: макияж, брови и ресницы"
                text="Все виды макияжа, уход за ресницами и бровями"
                image={makeupBanner}
            />
            <PortfolioItem
                image1={makeup1}
                image2={makeup2}
                image3={makeup3}
                title1="макияж"
                title2="брови"
                title3="ресницы"
                price1="от 650 р"
                price2="от 900 р"
                price3="от 1300 р"
            />
            <MakeupPrice />
            <Benefits />
            <Connection />
        </>
    );
};
