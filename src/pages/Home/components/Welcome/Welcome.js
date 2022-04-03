import React from "react";
import "./Welcome.scss";
import welcomeImg from "../../../../shared/images/welcome.jpg";

export const Welcome = () => {
    return (
        <section className="welcome">
            <div className="container">
                <h2 className="welcome__title">
                    Получайте скидки в течение трех месяцев с первого визита
                </h2>
                <div className="welcome__inner">
                    <ul className="welcome__info">
                        <li className="welcome__item">
                            <h3 className="welcome__item-title">Визит №1</h3>
                            <div className="welcome__item-text">
                                скидка 20% на все услуги и продукцию
                            </div>
                        </li>
                        <li className="welcome__item">
                            <h3 className="welcome__item-title">Визит №2</h3>
                            <div className="welcome__item-text">
                                скидка 10% на все услуги и продукцию)
                            </div>
                        </li>
                        <li className="welcome__item">
                            <h3 className="welcome__item-title">Визит №3</h3>
                            <div className="welcome__item-text">
                                Подарок от салона
                            </div>
                        </li>
                    </ul>
                    <div className="welcome__card">
                        <img src={welcomeImg} alt="Welcome card" />
                    </div>
                </div>
            </div>
        </section>
    );
};
