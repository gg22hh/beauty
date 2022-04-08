import React from "react";
import "./PortfolioBanner.scss";
import { ButtonSale } from "../../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../../components/Buttons/ButtonEnroll";

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
                        <ButtonSale>
                            получить скидку 20% на первый визит
                        </ButtonSale>
                        <ButtonEnroll>записаться онлайн</ButtonEnroll>
                    </div>
                </div>
            </div>
        </section>
    );
};
