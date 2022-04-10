import React from "react";
import "./StainingPrice.scss";
import { stainings } from "../../../shared/projectData";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { mapItem } from "../../../shared/functions";

export const StainingPrice = () => {
    const stainingPriceList = mapItem(stainings);

    return (
        <section className="stainingPrice">
            <div className="container">
                <h1 className="stainingPrice__title">СТОИМОСТЬ</h1>
                <div className="stainingPrice__text">
                    Стоимость краски не входит в стоимость услуги и
                    рассчитывается отдельно
                </div>
                <div className="stainingPrice__list">{stainingPriceList}</div>
                <div className="stainingPrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
