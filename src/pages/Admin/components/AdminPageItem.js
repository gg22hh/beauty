import React from "react";

export const AdminPageItem = ({ id, name, surname, phone, service }) => {
    return (
        <div className="adminPage__item">
            <h3 className="adminPage__item-title">Заявка №{id}</h3>
            <div className="adminPage__item-name">
                <strong>Имя:</strong> {name}
            </div>
            <div className="adminPage__item-surname">
                <strong>Фамилия:</strong> {surname}
            </div>
            <div className="adminPage__phone">
                <strong>Телефон:</strong>{" "}
                <a type="tel" href={`tel:${phone}`}>
                    {phone}
                </a>
            </div>

            <div className="adminPage__item-service">
                <strong>Сервис:</strong> {service}
            </div>
        </div>
    );
};
