import React from "react";
import "./StylingPrice.scss";
import { styling } from "../../../shared/projectData";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { mapItem } from "../../../shared/functions";

export const StylingPrice = () => {
    const stylingPriceList = mapItem(styling);

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
