import React from "react";
import "./HaircutsPrice.scss";
import { ButtonSale } from "../../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../../components/Buttons/ButtonEnroll";
import { mapItem } from "../../../../shared/functions";
import { usePricesFromServer } from "../../../../shared/hooks";

export const HaircutsPrice = () => {
    const haircuts = usePricesFromServer("haircuts");

    const haircutsPriceList = mapItem(haircuts);

    return (
        <section className="haircutsPrice">
            <div className="container">
                <h1 className="haircutsPrice__title">СТОИМОСТЬ</h1>
                <div className="haircutsPrice__list">{haircutsPriceList}</div>
                <div className="haircutsPrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
