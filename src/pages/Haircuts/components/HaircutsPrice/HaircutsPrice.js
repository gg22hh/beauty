import React from "react";
import { PriceItem } from "../../../../components/PriceItem/PriceItem";
import "./HaircutsPrice.scss";
import { haircuts } from "../../../../shared/projectData";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";
import { ButtonSale } from "../../../../components/Buttons/ButtonSale";

export const HaircutsPrice = () => {
    const haircutsPriceList = haircuts.map((haircut) => {
        return (
            <PriceItem
                key={haircut.id}
                title={haircut.title}
                price={haircut.price}
                text={haircut.text}
            />
        );
    });

    return (
        <section className="haircutsPrice">
            <div className="container">
                <h1 className="haircutsPrice__title">СТОИМОСТЬ</h1>
                <div className="haircutsPrice__list">{haircutsPriceList}</div>
                <div className="haircutsPrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
