import React from "react";
import { ButtonRed } from "../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { brow, makeup } from "../../../shared/projectData";

export const MakeupPrice = () => {
    const makeupPriceList = makeup.map((makeup) => {
        return (
            <PriceItem
                title={makeup.title}
                text={makeup.text}
                price={makeup.price}
            />
        );
    });

    const browPriceList = brow.map((brow) => {
        return (
            <PriceItem title={brow.title} text={brow.text} price={brow.price} />
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
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
