import React from "react";
import "./BannerItem.scss";
import { ButtonSale } from "../Buttons/ButtonSale";
import { ButtonEnroll } from "../Buttons/ButtonEnroll";

export const BannerItem = ({ title, text, image }) => {
    return (
        <section className="bannerItem">
            <div className="container">
                <div className="bannerItem__inner">
                    <div className="bannerItem__info">
                        <h1 className="bannerItem__title">{title}</h1>
                        <div className="bannerItem__text">{text}</div>
                        <div className="bannerItem__buttons">
                            <ButtonSale>
                                получить скидку 20% на первый визит
                            </ButtonSale>
                            <ButtonEnroll>записаться онлайн</ButtonEnroll>
                        </div>
                    </div>
                    <div className="bannerItem__image">
                        <img src={image} alt="bannerItem" />
                    </div>
                </div>
            </div>
        </section>
    );
};
