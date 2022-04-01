import React from "react";
import { ButtonRed } from "../Buttons/ButtonRed";
import { ButtonWhite } from "../Buttons/ButtonWhite";
import "./Banner.scss";

export const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner__info">
                    <h1 className="banner__info-title">Салон красоты Simada</h1>
                    <p className="banner__info-text">
                        Cтрижки, окрашивания, укладки, макияж, маникюр и
                        педикюр, косметология, перманентный макияж, массаж,
                        коррекция фигуры
                    </p>
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </div>
    );
};
