import React from "react";
import "./StocksPrivilege.scss";

export const StocksPrivilege = () => {
    return (
        <section className="stocksPrivilege">
            <div className="container">
                <h1 className="stocksPrivilege__title">
                    кому подарить наш сертификат
                </h1>
                <div className="stocksPrivilege__inner">
                    <div className="stocksPrivilege__item">
                        <h4 className="stocksPrivilege__item-title">
                            подарок мужчине
                        </h4>
                        <div className="stocksPrivilege__item-text">
                            другу, мужу или коллеге)
                        </div>
                    </div>
                    <div className="stocksPrivilege__item">
                        <h4 className="stocksPrivilege__item-title">
                            подарок женщине
                        </h4>
                        <div className="stocksPrivilege__item-text">
                            жене, коллеге, подруге
                        </div>
                    </div>
                    <div className="stocksPrivilege__item">
                        <h4 className="stocksPrivilege__item-title">
                            подарок близким
                        </h4>
                        <div className="stocksPrivilege__item-text">
                            папе, маме, друзьям
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
