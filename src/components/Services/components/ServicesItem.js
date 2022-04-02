import React from "react";

export const ServicesItem = ({ wider, image, title, text, href }) => {
    return (
        <div className={wider ? "services__item wider" : "services__item"}>
            <div className="services__item-image">
                <img src={image} alt="Item1" />
            </div>
            <a href={href} className="services__item-title">
                {title}
            </a>
            <div className="services__item-text">{text}</div>
        </div>
    );
};
