import React from "react";
import "./Connection.scss";

export const Connection = () => {
    return (
        <section className="connection">
            <div className="container">
                <div className="connection__inner">
                    <h2 className="connection__title">
                        получи скидку 20% на первый визит
                    </h2>
                    <div className="connection__text">
                        Мы свяжемся с вами в течение нескольких минут и запишем
                        вас на удобную дату
                    </div>
                    <form className="connection__form">
                        <input
                            type="tel"
                            placeholder="+7 (999) 999-99-99"
                            required
                        />
                        <button type="submit">отправить</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
