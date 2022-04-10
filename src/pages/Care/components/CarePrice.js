import React from "react";
import "./CarePrice.scss";
import { care } from "../../../shared/projectData";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { mapItem } from "../../../shared/functions";

export const CarePrice = () => {
    const carePriceList = mapItem(care);

    return (
        <section className="carePrice">
            <div className="container">
                <h1 className="carePrice__title">СТОИМОСТЬ</h1>
                <div className="carePrice__list">{carePriceList}</div>
                <div className="carePrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
