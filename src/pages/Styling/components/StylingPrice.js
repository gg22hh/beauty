import React from "react";
import "./StylingPrice.scss";
import { styling } from "../../../shared/projectData";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";

export const StylingPrice = () => {
    const stylingPriceList = styling.map((styling) => {
        return (
            <PriceItem
                key={styling.id}
                title={styling.title}
                text={styling.text}
                price={styling.price}
            />
        );
    });

    return (
        <section className="stylingPrice">
            <div className="container">
                <h1 className="stylingPrice__title">СТОИМОСТЬ</h1>
                <div className="stylingPrice__list">{stylingPriceList}</div>
                <div className="stylingPrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
