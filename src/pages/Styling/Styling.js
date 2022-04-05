import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import stylingBanner from "../../shared/images/Styling/stylingBanner.png";
import styling1 from "../../shared/images/Styling/styling1.jpg";
import styling2 from "../../shared/images/Styling/styling2.jpg";
import styling3 from "../../shared/images/Styling/styling3.jpg";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { StylingPrice } from "./components/StylingPrice";

export const Styling = () => {
    return (
        <>
            <BannerItem
                title="укладки для волос в салоне красоты simada"
                text="Дневные, свадебные и коктейльные укладки / прически"
                image={stylingBanner}
            />
            <PortfolioItem
                image1={styling1}
                image2={styling2}
                image3={styling3}
                title1="укладка повседневная"
                title2="Укладка коктейльная"
                title3="косы для девочек"
                price1="от 1000 р"
                price2="от 1200 р"
                price3="от 300 р"
            />
            <StylingPrice />
            <Benefits />
            <Connection />
        </>
    );
};
