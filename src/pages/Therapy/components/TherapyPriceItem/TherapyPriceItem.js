import React from "react";
import "./TherapyPriceItem.scss";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

export const TherapyPriceItem = ({ title, text, price }) => {
    return (
        <section className="therapyPrice__item">
            <h4 className="therapyPrice__item-title">{title}</h4>
            <div className="therapyPrice__item-text">{text}</div>
            <div className="therapyPrice__item-time">
                <AccessTimeFilledIcon /> 75 минут
            </div>
            <div className="therapyPrice__item-price">{price}</div>
            <div className="therapyPrice__item-button">записаться</div>
        </section>
    );
};
