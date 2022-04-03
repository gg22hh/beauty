import React from "react";
import "./StocksBanner.scss";
import { ButtonRed } from "../../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";
import stocksBanner from "../../../../shared/images/Stocks/stocksBanner.svg";

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
                            <ButtonRed>
                                получить скидку 20% на первый визит
                            </ButtonRed>
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
