import React, { useState } from "react";
import "./ManicurePrice.scss";
import { extension, manicure, pedicure } from "../../../shared/projectData";
import { PriceItem } from "../../../components/PriceItem/PriceItem.js";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";

export const ManicurePrice = () => {
    const [showAll, setShowAll] = useState(false);

    const manicurePriceList = manicure.map((manicure) => {
        return (
            <PriceItem
                key={manicure.id}
                title={manicure.title}
                price={manicure.price}
                text={manicure.text}
            />
        );
    });

    const pedicurePriceList = pedicure.map((pedicure) => {
        return (
            <PriceItem
                key={pedicure.id}
                title={pedicure.title}
                text={pedicure.text}
                price={pedicure.price}
            />
        );
    });

    const extensionPriceList = extension.map((extension) => {
        return (
            <PriceItem
                key={extension.id}
                title={extension.title}
                text={extension.text}
                price={extension.price}
            />
        );
    });

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">
                        маникюр женский
                    </div>
                    <div className="manicurePrice__item-list">
                        {manicurePriceList}
                    </div>
                </div>
                {showAll && (
                    <>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                педикюр женский
                            </div>
                            <div className="manicurePrice__item-list">
                                {pedicurePriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                наращивание
                            </div>
                            <div className="manicurePrice__item-list">
                                {extensionPriceList}
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
