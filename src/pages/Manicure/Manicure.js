import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import manicureBanner from "../../shared/images/Manicure/manicureBanner.png";
import manicure1 from "../../shared/images/Manicure/manicure1.jpg";
import manicure2 from "../../shared/images/Manicure/manicure2.jpg";
import manicure3 from "../../shared/images/Manicure/manicure3.jpg";
import { ManicurePrice } from "./components/ManicurePrice";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";

export const Manicure = () => {
    return (
        <>
            <BannerItem
                title="Маникюр и педикюр"
                text="Все виды маникюра и педикюра, покрытие, полировка, ремонт ногтей"
                image={manicureBanner}
            />
            <PortfolioItem
                image1={manicure2}
                image2={manicure1}
                image3={manicure3}
                title1="женский маникюр"
                title2="наращивание"
                title3="педикюр"
                price1="от 650 р"
                price2="от 900 р"
                price3="от 1300 р"
            />
            <ManicurePrice />
            <Benefits />
            <Connection />
        </>
    );
};
