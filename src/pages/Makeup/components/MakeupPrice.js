import React from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { brow, makeup } from "../../../shared/projectData";

export const MakeupPrice = () => {
    const makeupPriceList = makeup.map((makeup) => {
        return (
            <PriceItem
                key={makeup.id}
                title={makeup.title}
                text={makeup.text}
                price={makeup.price}
            />
        );
    });

    const browPriceList = brow.map((brow) => {
        return (
            <PriceItem
                key={brow.id}
                title={brow.title}
                text={brow.text}
                price={brow.price}
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
                        {makeupPriceList}
                    </div>
                </div>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">
                        Уход за бровями и ресницами
                    </div>
                    <div className="manicurePrice__item-list">
                        {browPriceList}
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
