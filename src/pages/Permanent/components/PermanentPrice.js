import React from "react";
import { ButtonRed } from "../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { permanent } from "../../../shared/projectData";

export const PermanentPrice = () => {
    const permanentPriceList = permanent.map((permanent) => {
        return (
            <PriceItem
                title={permanent.title}
                text={permanent.text}
                price={permanent.price}
            />
        );
    });

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">макияж</div>
                    <div className="manicurePrice__item-list">
                        {permanentPriceList}
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
