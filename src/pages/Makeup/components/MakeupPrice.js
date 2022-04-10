import React from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { mapItem } from "../../../shared/functions";
import { usePricesFromServer } from "../../../shared/hooks";

export const MakeupPrice = () => {
    const makeup = usePricesFromServer("makeup");
    const brow = usePricesFromServer("brow");

    const makeupPriceList = mapItem(makeup);
    const browPriceList = mapItem(brow);

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
