import React from "react";
import "./Benefits.scss";
import { BenefitsItem } from "./components/BenefitsItem";
import { benefits } from "../../shared/projectData";

export const Benefits = () => {
    const benefitsList = benefits.map((item) => {
        return (
            <BenefitsItem key={item.id} title={item.title} text={item.text} />
        );
    });

    return (
        <section className="benefits">
            <div className="container">
                <h2 className="benefits__title">почему выбирают нас</h2>
                <div className="benefits__inner">{benefitsList}</div>
            </div>
        </section>
    );
};
