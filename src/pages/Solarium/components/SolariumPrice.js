import React from "react";
import "./SolariumPrice.scss";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { solarium } from "../../../shared/projectData";
import solariumPrice from "../../../shared/images/Solarium/solariumPrice.jpg";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";

export const SolariumPrice = () => {
    const solariumPriceList = solarium.map((sol) => {
        return (
            <PriceItem
                key={sol.id}
                title={sol.title}
                text={sol.text}
                price={sol.price}
            />
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
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
