import React from "react";
import "./Footer.scss";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__map"></div>
            <div className="footer__info">
                <h2 className="footer__info-title">контакты</h2>
                <div className="footer__info-place">
                    <p>ул. Михалковская, 1/51, м. Коптево</p>
                    <a href="tel:+74959477787">+7(495) 947-77-87</a>
                </div>
                <div className="footer__info-place">
                    <p>Пятницкое шоссе, д.9 м. Митино, м. Волоколамская</p>
                    <a href="tel:+74959477787">+7(495) 947-77-87</a>
                </div>
            </div>
        </footer>
    );
};
