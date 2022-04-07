import React from "react";
import "./StocksBanner.scss";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";
import stocksBanner from "../../../../shared/images/Stocks/stocksBanner.svg";
import { ButtonSale } from "../../../../components/Buttons/ButtonSale";

export const StocksBanner = () => {
    return (
        <section className="stocksBanner">
            <div className="container">
                <div className="stocksBanner__inner">
                    <div className="stocksBanner__info">
                        <h1 className="stocksBanner__title">
                            подарочные сертификаты
                        </h1>
                        <div className="stocksBanner__text">
                            Купите подарок онлайн себе или близким прямо сейчас!
                        </div>
                        <div className="stocksBanner__buttons">
                            <ButtonSale>
                                получить скидку 20% на первый визит
                            </ButtonSale>
                            <ButtonWhite>записаться онлайн</ButtonWhite>
                        </div>
                    </div>
                    <div className="stocksBanner__image">
                        <img src={stocksBanner} alt="Stocks banner" />
                    </div>
                </div>
            </div>
        </section>
    );
};
