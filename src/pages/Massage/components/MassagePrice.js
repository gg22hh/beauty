import React, { useState } from "react";
import { ButtonRed } from "../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { massage, wrapping } from "../../../shared/projectData";

export const MassagePrice = () => {
    const [showAll, setShowAll] = useState(false);

    const massagePriceList = massage.map((massage) => {
        return (
            <PriceItem
                title={massage.title}
                text={massage.text}
                price={massage.price}
            />
        );
    });

    const wrappingPriceList = wrapping.map((wrap) => {
        return (
            <PriceItem title={wrap.title} text={wrap.text} price={wrap.price} />
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
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="manicurePrice__button"
                >
                    <ButtonWhite>
                        {showAll ? "Показать меньше" : "Показать еще"}{" "}
                    </ButtonWhite>
                </button>
                <div className="manicurePrice__buttons">
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
