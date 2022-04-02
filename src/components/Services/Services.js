import React from "react";
import "./Services.scss";
import { ServicesItem } from "./components/ServicesItem";
import { services } from "../../shared/projectData";
import { ButtonRed } from "../Buttons/ButtonRed";
import { ButtonWhite } from "../Buttons/ButtonWhite";

export const Services = () => {
    const servicesList = services.map((item) => {
        return (
            <ServicesItem
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                wider={item.wider}
                href={item.href}
            />
        );
    });

    return (
        <section className="services">
            <div className="container">
                <h2 className="services__title">Услуги</h2>
                <div className="services__inner">{servicesList}</div>
                <div className="services__buttons">
                    <ButtonRed>получить скидку 20% на первый визит</ButtonRed>
                    <ButtonWhite>записаться онлайн</ButtonWhite>
                </div>
            </div>
        </section>
    );
};
