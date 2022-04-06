import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import massageBanner from "../../shared/images/Massage/massageBanner.png";
import massage1 from "../../shared/images/Massage/massage1.jpg";
import massage2 from "../../shared/images/Massage/massage2.jpg";
import massage3 from "../../shared/images/Massage/massage3.jpg";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import { MassagePrice } from "./components/MassagePrice";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";

export const Massage = () => {
    return (
        <>
            <BannerItem
                title="массаж в салоне красоты simada"
                text="Все виды массажа"
                image={massageBanner}
            />
            <PortfolioItem
                image1={massage1}
                image2={massage2}
                image3={massage3}
                title1="Классический массаж"
                title2="Антицеллюлитный массаж"
                title3="Арома массаж"
                price1="от 2600 р"
                price2="от 2600 р"
                price3="от 3000 р"
            />
            <MassagePrice />
            <Benefits />
            <Connection />
        </>
    );
};
