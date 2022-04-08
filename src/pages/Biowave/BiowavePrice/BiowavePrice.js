import React from "react";
import "./BiowavePrice.scss";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import biowave1 from "../../../shared/images/Biowave/biowave1.jpg";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";

export const BiowavePrice = () => {
    return (
        <section className="biowavePrice">
            <div className="container">
                <div className="biowavePrice__inner">
                    <div className="biowavePrice__image">
                        <img src={biowave1} alt="biowavePrice" />
                    </div>
                    <PriceItem
                        title="Биозавивка"
                        price="3000 / 4000 / 5000"
                        text="короткие / средние / длинные"
                    />
                </div>
                <div className="biowavePrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
