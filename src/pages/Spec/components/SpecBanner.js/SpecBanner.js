import React from "react";
import "./SpecBanner.scss";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";
import { ButtonSale } from "../../../../components/Buttons/ButtonSale";

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
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
