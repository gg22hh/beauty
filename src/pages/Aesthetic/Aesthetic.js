import React from "react";
import "./Aesthetic.scss";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import aestheticBanner from "../../shared/images/Aesthetic/aestheticBanner.png";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import aesthetic1 from "../../shared/images/Aesthetic/aesthetic1.jpg";
import aesthetic2 from "../../shared/images/Aesthetic/aesthetic2.jpg";
import aesthetic3 from "../../shared/images/Aesthetic/aesthetic3.jpg";
import { AestheticPrice } from "./components/AestheticPrice";

export const Aesthetic = () => {
    return (
        <>
            <div className="aesthetic">
                <BannerItem
                    title="эстетическая косметология"
                    text="Решение многих косметологических проблем без применения инвазивных методик"
                    image={aestheticBanner}
                />
            </div>
            <PortfolioItem
                image1={aesthetic1}
                image2={aesthetic2}
                image3={aesthetic3}
                title1="Чистки"
                title2="пилинги"
                title3="маски"
                price1="от 2000 р"
                price2="от 1000 р"
                price3="от 1100 р"
            />
            <AestheticPrice />
        </>
    );
};
