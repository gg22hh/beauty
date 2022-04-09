import React, { useState } from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import { ir, rf, wp } from "../../../shared/projectData";

export const ApparatusPrice = () => {
    const [showAll, setShowAll] = useState(false);

    const wpPriceList = wp.map((wp) => {
        return (
            <PriceItem
                key={wp.id}
                title={wp.title}
                price={wp.price}
                text={wp.text}
            />
        );
    });

    const rfPriceList = rf.map((rf) => {
        return (
            <PriceItem
                key={rf.id}
                title={rf.title}
                price={rf.price}
                text={rf.text}
            />
        );
    });

    const irPriceList = ir.map((ir) => {
        return (
            <PriceItem
                key={rf.id}
                title={ir.title}
                price={ir.price}
                text={ir.text}
            />
        );
    });

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
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="manicurePrice__button"
                >
                    <ButtonWhite>
                        {showAll ? "Показать меньше" : "Показать еще"}
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
