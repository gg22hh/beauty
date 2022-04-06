import React from "react";
import "./Injection.scss";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import injectionBanner from "../../shared/images/Injection/injectionBanner.png";
import injection1 from "../../shared/images/Injection/injection1.jpg";
import injection2 from "../../shared/images/Injection/injection2.jpg";
import injection3 from "../../shared/images/Injection/injection3.jpg";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import { InjectionPrice } from "./components/InjectionPrice";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";

export const Injection = () => {
    return (
        <>
            <div className="injection">
                <BannerItem
                    title="Инъекционная косметология"
                    text="Увлажняющие и омолаживающие процедуры мезотерапии и биоревитализации, 3D моделирование и армирование лица, а также введение ботокса."
                    image={injectionBanner}
                />
            </div>
            <PortfolioItem
                image1={injection1}
                image2={injection2}
                image3={injection3}
                title1="Контурная пластика"
                title2="Биоревитализация"
                title3="Плазмотерапия"
                price1="от 5000 р"
                price2="от 8500 р"
                price3="от 4200 р"
            />
            <InjectionPrice />
            <Benefits />
            <Connection />
        </>
    );
};
