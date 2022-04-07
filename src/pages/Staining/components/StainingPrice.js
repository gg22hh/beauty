import React from "react";
import "./StainingPrice.scss";
import { stainings } from "../../../shared/projectData";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";

export const StainingPrice = () => {
    const stainingPriceList = stainings.map((staining) => {
        return (
            <PriceItem
                title={staining.title}
                price={staining.price}
                text={staining.text}
            />
        );
    });

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
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
