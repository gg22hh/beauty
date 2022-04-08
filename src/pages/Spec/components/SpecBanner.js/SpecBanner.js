import React from "react";
import "./SpecBanner.scss";
import { ButtonSale } from "../../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../../components/Buttons/ButtonEnroll";

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
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
