import React, { useState } from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { mapItem } from "../../../shared/functions";
import { usePricesFromServer } from "../../../shared/hooks";

export const ApparatusPrice = () => {
    const [showAll, setShowAll] = useState(false);

    const wp = usePricesFromServer("wp");
    const rf = usePricesFromServer("rf");
    const ir = usePricesFromServer("ir");

    const wpPriceList = mapItem(wp);
    const rfPriceList = mapItem(rf);
    const irPriceList = mapItem(ir);

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">
                        Система THE FACE LAB <br /> Процедура газожидкостного
                        пилинга WP
                    </div>
                    <div className="manicurePrice__item-list">
                        {wpPriceList}
                    </div>
                </div>
                {showAll && (
                    <>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Процедура радиоволнового лифтинга RF
                            </div>
                            <div className="manicurePrice__item-list">
                                {rfPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Процедура инфракрасного термолифтинга IR
                            </div>
                            <div className="manicurePrice__item-list">
                                {irPriceList}
                            </div>
                        </div>
                    </>
                )}
                <div
                    onClick={() => setShowAll(!showAll)}
                    className="manicurePrice__button"
                >
                    <ButtonWhite>
                        {showAll ? "Показать меньше" : "Показать еще"}
                    </ButtonWhite>
                </div>
                <div className="manicurePrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
