import React, { useState } from "react";
import { ButtonRed } from "../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import {
    alginate,
    cleaning,
    faceMassage,
    facials,
    masks,
    peeling,
} from "../../../shared/projectData";

export const AestheticPrice = () => {
    const [showAll, setShowAll] = useState(false);

    const cleaningPriceList = cleaning.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const facialsPriceList = facials.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const masksPriceList = masks.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const alginatePriceList = alginate.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const peelingPriceList = peeling.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const faceMassagePriceList = faceMassage.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">чистки</div>
                    <div className="manicurePrice__item-list">
                        {cleaningPriceList}
                    </div>
                </div>
                {showAll && (
                    <>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Уходы
                            </div>
                            <div className="manicurePrice__item-list">
                                {facialsPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Маски
                            </div>
                            <div className="manicurePrice__item-list">
                                {masksPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Маски Альгинатные
                            </div>
                            <div className="manicurePrice__item-list">
                                {alginatePriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                пилинги
                            </div>
                            <div className="manicurePrice__item-list">
                                {peelingPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Массаж лица
                            </div>
                            <div className="manicurePrice__item-list">
                                {faceMassagePriceList}
                            </div>
                        </div>
                    </>
                )}
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="manicurePrice__button"
                >
                    <ButtonWhite>
                        {showAll ? "Показать меньше" : "Показать еще"}
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
