import React from "react";
import "./StocksAdvantage.scss";

export const StocksAdvantage = () => {
    return (
        <section className="stocksAdvantage">
            <div className="container">
                <h1 className="stocksAdvantage__title">преимущества</h1>
                <div className="stocksAdvantage__inner">
                    <div className="stocksAdvantage__item">
                        <div className="stocksAdvantage__item-uptitle">01</div>
                        <h4 className="stocksAdvantage__item-title">выгода</h4>
                        <div className="stocksAdvantage__item-text">
                            Вы приобретаете сертификат со скидкой 20%, но
                            обслуживаетесь на полную стоимость
                        </div>
                    </div>
                    <div className="stocksAdvantage__item">
                        <div className="stocksAdvantage__item-uptitle">02</div>
                        <h4 className="stocksAdvantage__item-title">
                            нужный подарок
                        </h4>
                        <div className="stocksAdvantage__item-text">
                            Не знаете, что подарить? Сертификат в Персону будет
                            отличным вариантом, который покажет вашу заботу
                        </div>
                    </div>
                    <div className="stocksAdvantage__item">
                        <div className="stocksAdvantage__item-uptitle">03</div>
                        <h4 className="stocksAdvantage__item-title">
                            комплимент от салона
                        </h4>
                        <div className="stocksAdvantage__item-text">
                            Не получается прийти в клиентский день или места у
                            мастера заняты? С сертификатом вы получите личный
                            клиентский день с подарком от салона!
                        </div>
                    </div>
                    <div className="stocksAdvantage__item">
                        <div className="stocksAdvantage__item-uptitle">04</div>
                        <h4 className="stocksAdvantage__item-title">
                            Долгое время действия
                        </h4>
                        <div className="stocksAdvantage__item-text">
                            Обслужиться в салоне вы сможете в течение 3 месяцев
                            с момента покупки сертификата
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
