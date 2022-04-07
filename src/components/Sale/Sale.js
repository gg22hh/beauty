import React from "react";
import "./Sale.scss";

export const Sale = ({ setShowForm }) => {
    const submitForm = (e) => {
        e.preventDefault();
        setShowForm(false);
    };

    return (
        <>
            <div className="form">
                <form onSubmit={submitForm}>
                    <div
                        onClick={() => setShowForm(false)}
                        className="form__close"
                    >
                        &#10008;
                    </div>
                    <h1 className="form__title">
                        ПОЛУЧИ СКИДКУ 20% НА ПЕРВЫЙ ВИЗИТ
                    </h1>
                    <div className="form__text">
                        Мы свяжемся с вами в течение нескольких минут и запишем
                        вас на удобную дату
                    </div>
                    <input
                        type="tel"
                        placeholder="+7(962)-774-49-38"
                        required
                    />
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div
                onClick={() => setShowForm(false)}
                className="form__overlay"
            ></div>
        </>
    );
};
