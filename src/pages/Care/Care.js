import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import careBanner from "../../shared/images/Care/careBanner.png";
import care1 from "../../shared/images/Care/care1.jpg";
import care2 from "../../shared/images/Care/care2.jpg";
import care3 from "../../shared/images/Care/care3.jpg";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { CarePrice } from "./components/CarePrice";

export const Care = () => {
    return (
        <>
            <BannerItem
                text="Здоровье ваших волос от TIGI, Wella, DEMI, Kerastase, Moroccanoil, Sebastian, Redken, Helen Seward, Nioxin"
                title="ботокс и уходы для волос в салоне красоты simada"
                image={careBanner}
            />
            <PortfolioItem
                image1={care1}
                image2={care2}
                image3={care3}
                title1="Маска  Pro Fiber Loreal"
                title2="Экспресс уход  от LEBEL"
                title3="СПА программа"
                price1="от 1500 р"
                price2="от 1900 р"
                price3="от 3000 р"
            />
            <CarePrice />
            <Benefits />
            <Connection />
        </>
    );
};
