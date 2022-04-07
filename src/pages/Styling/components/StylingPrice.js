import React from "react";
import "./StylingPrice.scss";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { styling } from "../../../shared/projectData";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";

export const StylingPrice = () => {
    const stylingPriceList = styling.map((styling) => {
        return (
            <PriceItem
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
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
