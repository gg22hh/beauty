import React from "react";

export const BenefitsItem = ({ title, text }) => {
    return (
        <div className="benefits__item">
            <h1 className="benefits__item-title">{title}</h1>
            <div className="benefits__item-text">{text}</div>
        </div>
    );
};
