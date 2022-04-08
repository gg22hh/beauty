import React, { useState } from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import {
    bio,
    biorev,
    botulin,
    contur,
    intra,
    mezo,
    plazmo,
} from "../../../shared/projectData";

export const InjectionPrice = () => {
    const [showAll, setShowAll] = useState(false);

    const intraPriceList = intra.map((intra) => {
        return (
            <PriceItem
                title={intra.title}
                text={intra.text}
                price={intra.price}
            />
        );
    });

    const bioPriceList = bio.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const mezoPriceList = mezo.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const conturPriceList = contur.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const borevPriceList = biorev.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const botulinPriceList = botulin.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    const plazmoPriceList = plazmo.map((item) => {
        return (
            <PriceItem title={item.title} text={item.text} price={item.price} />
        );
    });

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">
                        Интралипотерапия
                    </div>
                    <div className="manicurePrice__item-list">
                        {intraPriceList}
                    </div>
                </div>
                {showAll && (
                    <>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Биорепарация
                            </div>
                            <div className="manicurePrice__item-list">
                                {bioPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                мезотерапия
                            </div>
                            <div className="manicurePrice__item-list">
                                {mezoPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Контурная пластика
                            </div>
                            <div className="manicurePrice__item-list">
                                {conturPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Биоревитализация
                            </div>
                            <div className="manicurePrice__item-list">
                                {borevPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Ботулинотерапия
                            </div>
                            <div className="manicurePrice__item-list">
                                {botulinPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Плазмотерапия
                            </div>
                            <div className="manicurePrice__item-list">
                                {plazmoPriceList}
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
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
