import React, { useState } from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { mapItem } from "../../../shared/functions";
import { usePricesFromServer } from "../../../shared/hooks";

export const MassagePrice = () => {
    const [showAll, setShowAll] = useState(false);

    const massage = usePricesFromServer("massage");
    const wrapping = usePricesFromServer("wrapping");

    const massagePriceList = mapItem(massage);
    const wrappingPriceList = mapItem(wrapping);

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">массаж</div>
                    <div className="manicurePrice__item-list">
                        {massagePriceList}
                    </div>
                </div>
                {showAll && (
                    <>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Обертывания
                            </div>
                            <div className="manicurePrice__item-list">
                                {wrappingPriceList}
                            </div>
                        </div>
                    </>
                )}
                <div
                    onClick={() => setShowAll(!showAll)}
                    className="manicurePrice__button"
                >
                    <ButtonWhite>
                        {showAll ? "Показать меньше" : "Показать еще"}{" "}
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
