import React from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { permanent } from "../../../shared/projectData";

export const PermanentPrice = () => {
    const permanentPriceList = permanent.map((permanent) => {
        return (
            <PriceItem
                key={permanent.id}
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
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
