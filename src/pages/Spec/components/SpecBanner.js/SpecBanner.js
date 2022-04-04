import React from "react";
import "./SpecBanner.scss";
import { ButtonRed } from "../../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";

export const SpecBanner = () => {
    return (
        <section className="specBanner">
            <div className="container">
                <h1 className="specBanner__title">
                    специалисты салона красоты simada
                </h1>
                <div className="specBanner__text">
                    Мы берем в команду проверенных специалистов. Поэтому мы
                    гарантируем качество услуг!
                </div>
                <div className="specBanner__buttons">
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
