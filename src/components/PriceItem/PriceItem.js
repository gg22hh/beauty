import React from "react";
import "./PriceItem.scss";

export const PriceItem = ({ title, price, text }) => {
    return (
        <div className="priceItem">
            <div className="priceItem__header">
                <h4 className="priceItem__title">{title}</h4>
                <div className="priceItem__price">{price}</div>
            </div>
            <div className="priceItem__text">{text}</div>
        </div>
    );
};
