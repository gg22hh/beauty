import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { HaircutsPrice } from "./components/HaircutsPrice/HaircutsPrice";
import haircutsBanner from "../../shared/images/Haircuts/haircutsBanner.png";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import haircut1 from "../../shared/images/Haircuts/haircut1.jpg";
import haircut2 from "../../shared/images/Haircuts/haircut2.jpg";
import haircut3 from "../../shared/images/Haircuts/haircut3.jpg";

export const Haircuts = () => {
    return (
        <>
            <BannerItem
                title="стрижки в салоне красоты simada"
                text="Все виды стрижек. В услугу входит мытье, стрижка и укладка. Мы даем гарантию на наши услуги!"
                image={haircutsBanner}
            />
            <PortfolioItem
                image1={haircut1}
                image2={haircut2}
                image3={haircut3}
                title1="женская стрижка"
                title2="мужская стрижка"
                title3="детская стрижка"
                price1="от 1500 р"
                price2="от 1100 р"
                price3="от 500 р"
            />
            <HaircutsPrice />
            <Benefits />
            <Connection />
        </>
    );
};
