import React from "react";
import "./PortfolioBanner.scss";
import { ButtonRed } from "../../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";

export const PortfolioBanner = () => {
    return (
        <section className="portfolioBanner">
            <div className="container">
                <div className="portfolioBanner__inner">
                    <h1 className="portfolioBanner__title">
                        Портфолио Салона красоты Simada
                    </h1>
                    <div className="portfolioBanner__text">
                        Cтрижки, окрашивания, укладки, макияж, маникюр и
                        педикюр, косметология, перманентный макияж, массаж,
                        коррекция фигуры
                    </div>
                    <div className="portfolioBanner__buttons">
                        <ButtonRed>
                            получить скидку 20% на первый визит
                        </ButtonRed>
                        <ButtonWhite>записаться онлайн</ButtonWhite>
                    </div>
                </div>
            </div>
        </section>
    );
};
