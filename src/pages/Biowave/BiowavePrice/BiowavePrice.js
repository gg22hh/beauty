import React from "react";
import "./BiowavePrice.scss";
import { ButtonRed } from "../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { PriceItem } from "../../../components/PriceItem/PriceItem";
import biowave1 from "../../../shared/images/Biowave/biowave1.jpg";

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
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
