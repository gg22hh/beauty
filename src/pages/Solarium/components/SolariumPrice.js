import React from "react";
import "./SolariumPrice.scss";
import { ButtonRed } from "../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { solarium } from "../../../shared/projectData";
import solariumPrice from "../../../shared/images/Solarium/solariumPrice.jpg";

export const SolariumPrice = () => {
    const solariumPriceList = solarium.map((sol) => {
        return (
            <PriceItem title={sol.title} text={sol.text} price={sol.price} />
        );
    });

    return (
        <section className="solariumPrice">
            <div className="container">
                <div className="solariumPrice__inner">
                    <div className="solariumPrice__image">
                        <img src={solariumPrice} alt="solarium" />
                    </div>
                    <div className="manicurePrice__item-list">
                        {solariumPriceList}
                    </div>
                </div>
                <div className="manicurePrice__buttons">
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
