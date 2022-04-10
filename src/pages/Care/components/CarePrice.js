import React from "react";
import "./CarePrice.scss";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { mapItem } from "../../../shared/functions";
import { usePricesFromServer } from "../../../shared/hooks";

export const CarePrice = () => {
    const list = usePricesFromServer("care");
    const carePriceList = mapItem(list);
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
