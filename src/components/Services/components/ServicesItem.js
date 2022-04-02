import React from "react";

export const ServicesItem = ({ wider, image, title, text, href }) => {
    return (
        <a
            href={href}
            className={wider ? "services__item wider" : "services__item"}
        >
            <div className="services__item-image">
                <img src={image} alt="Item1" />
            </div>
            <div className="services__item-title">{title}</div>
            <div className="services__item-text">{text}</div>
        </a>
    );
};
