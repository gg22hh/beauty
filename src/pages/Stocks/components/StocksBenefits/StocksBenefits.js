import React from "react";
import item1 from "../../../../shared/images/Stocks/stocks-item3000.png";
import item2 from "../../../../shared/images/Stocks/stocks-item5000.png";
import item3 from "../../../../shared/images/Stocks/stocks-item10000.png";
import item4 from "../../../../shared/images/Stocks/stocks-item15000.png";
import "./StocksBenefits.scss";

export const StocksBenefits = () => {
    return (
        <section className="stocksBenefits">
            <div className="container">
                <h1 className="stocksBenefits__title">
                    ВЫБЕРИТЕ ПОДХОДЯЩИЙ СЕРТИФИКАТ
                </h1>
                <div className="stocksBenefits__inner">
                    <div className="stocksBenefits__item">
                        <div className="stocksBenefits__item-image">
                            <img src={item1} alt="item1" />
                        </div>
                        <div className="stocksBenefits__item-text">3000 р</div>
                        <button className="stocksBenefits__item-button">
                            купить
                        </button>
                    </div>
                    <div className="stocksBenefits__item">
                        <div className="stocksBenefits__item-image">
                            <img src={item2} alt="item1" />
                        </div>
                        <div className="stocksBenefits__item-text">5000 р</div>
                        <button className="stocksBenefits__item-button">
                            купить
                        </button>
                    </div>
                    <div className="stocksBenefits__item">
                        <div className="stocksBenefits__item-image">
                            <img src={item3} alt="item1" />
                        </div>
                        <div className="stocksBenefits__item-text">10000 р</div>
                        <button className="stocksBenefits__item-button">
                            купить
                        </button>
                    </div>
                    <div className="stocksBenefits__item">
                        <div className="stocksBenefits__item-image">
                            <img src={item4} alt="item1" />
                        </div>
                        <div className="stocksBenefits__item-text">15000 р</div>
                        <button className="stocksBenefits__item-button">
                            купить
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
