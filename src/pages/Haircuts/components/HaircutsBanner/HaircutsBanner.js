import React from "react";
import "./HaircutsBanner.scss";
import { ButtonRed } from "../../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../../components/Buttons/ButtonWhite";
import haircutsBanner from "../../../../shared/images/Haircuts/haircutsBanner.png";

export const HaircutsBanner = () => {
    return (
        <section className="haircutsBanner">
            <div className="container">
                <div className="haircutsBanner__inner">
                    <div className="haircutsBanner__info">
                        <h1 className="haircutsBanner__title">
                            стрижки в салоне красоты simada
                        </h1>
                        <div className="haircutsBanner__text">
                            Все виды стрижек. В услугу входит мытье, стрижка и
                            укладка. Мы даем гарантию на наши услуги!
                        </div>
                        <div className="haircutsBanner__buttons">
                            <ButtonRed>
                                получить скидку 20% на первый визит
                            </ButtonRed>
                            <ButtonWhite>записаться онлайн</ButtonWhite>
                        </div>
                    </div>
                    <div className="haircutsBanner__image">
                        <img src={haircutsBanner} alt="haircutsBanner" />
                    </div>
                </div>
            </div>
        </section>
    );
};
