import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import stainingBanner from "../../shared/images/Staining/stainingBanner.png";
import staining1 from "../../shared/images/Staining/staining1.jpg";
import staining2 from "../../shared/images/Staining/staining2.jpg";
import staining3 from "../../shared/images/Staining/staining3.jpg";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { StainingPrice } from "./components/StainingPrice";

export const Stainings = () => {
    return (
        <>
            <BannerItem
                title="окрашивание в салоне красоты simada"
                text="Все виды окрашивания: омбре, балаяж, airtouch, мелирование, брондирование и т.д."
                image={stainingBanner}
            />
            <PortfolioItem
                image1={staining1}
                image2={staining2}
                image3={staining3}
                title1="окрашивание волос"
                title2="милирование"
                title3="колорирование"
                price1="от 2000 р"
                price2="от 1000 р"
                price3="от 3800 р"
            />
            <StainingPrice />
            <Benefits />
            <Connection />
        </>
    );
};
