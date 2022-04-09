import React, { useState } from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { massage, wrapping } from "../../../shared/projectData";

export const MassagePrice = () => {
    const [showAll, setShowAll] = useState(false);

    const massagePriceList = massage.map((massage) => {
        return (
            <PriceItem
                key={massage.id}
                title={massage.title}
                text={massage.text}
                price={massage.price}
            />
        );
    });

    const wrappingPriceList = wrapping.map((wrap) => {
        return (
            <PriceItem
                key={wrap.id}
                title={wrap.title}
                text={wrap.text}
                price={wrap.price}
            />
        );
    });

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
