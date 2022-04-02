import React from "react";
import { ButtonRed } from "../Buttons/ButtonRed";
import { ButtonWhite } from "../Buttons/ButtonWhite";
import "./Banner.scss";

export const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner__inner">
                    <div className="banner__info">
                        <h1 className="banner__info-title">
                            Салон красоты Simada
                        </h1>
                        <p className="banner__info-text">
                            Cтрижки, окрашивания, укладки, макияж, маникюр и
                            педикюр, косметология, перманентный макияж, массаж,
                            коррекция фигуры
                        </p>
                        <ButtonRed>
                            получить скидку 20% на первый визит
                        </ButtonRed>
                        <ButtonWhite>записаться онлайн</ButtonWhite>
                    </div>
                    <ul className="banner__connection">
                        <li className="banner__connection-item">
                            ул. Михалковская, 1/51, м. Коптево
                            <a href="#">+7(495) 947-77-87</a>
                        </li>
                        <li className="banner__connection-item">
                            Пятницкое шоссе, д.9 м. Митино, м. Волоколамская
                            <a href="#">+7 (495) 925-12-11</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
