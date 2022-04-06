import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import permanentBanner from "../../shared/images/Permanent/permanentBanner.png";
import permanent1 from "../../shared/images/Permanent/permanent1.jpg";
import permanent2 from "../../shared/images/Permanent/permanent2.jpg";
import permanent3 from "../../shared/images/Permanent/permanent3.jpg";
import { PermanentPrice } from "./components/PermanentPrice";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";

export const Permanent = () => {
    return (
        <>
            <BannerItem
                title="перманентный макияж"
                text="Мастера нашей студии помогут подчеркнуть Вашу природную красоту"
                image={permanentBanner}
            />
            <PortfolioItem
                image1={permanent1}
                image2={permanent2}
                image3={permanent3}
                title1="брови"
                title2="губы"
                title3="глаза"
                price1="от 7000 р"
                price2="от 7000 р"
                price3="от 7000 р"
            />
            <PermanentPrice />
            <Benefits />
            <Connection />
        </>
    );
};
