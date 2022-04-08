import React from "react";
import "./CarePrice.scss";
import { care } from "../../../shared/projectData";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";

export const CarePrice = () => {
    const carePriceList = care.map((care) => {
        return (
            <PriceItem title={care.title} price={care.price} text={care.text} />
        );
    });

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
