import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import { PortfolioItem } from "../../components/PortfolioItem/PortfolioItem";
import apparatusBanner from "../../shared/images/Apparatus/apparatusBanner.png";
import "./Apparatus.scss";
import apparatus1 from "../../shared/images/Apparatus/apparatus1.jpg";
import apparatus2 from "../../shared/images/Apparatus/apparatus2.jpg";
import apparatus3 from "../../shared/images/Apparatus/apparatus3.jpg";
import { ApparatusPrice } from "./components/ApparatusPrice";

export const Apparatus = () => {
    return (
        <>
            <div className="apparatus">
                <BannerItem
                    title="аппаратная косметология"
                    text="Омолаживающие и лечебные процедуры, выполняемые квалифицированными врачами-дерматокосметологами"
                    image={apparatusBanner}
                />
            </div>
            <PortfolioItem
                image1={apparatus1}
                image2={apparatus2}
                image3={apparatus3}
                title1="Газожидкостный пилинг WP"
                title2="Радиоволновой лифинг RF"
                title3="Термолифтинг IR"
                price1="от 1500 р"
                price2="от 2300 р"
                price3="от 4200 р"
            />
            <ApparatusPrice />
        </>
    );
};
