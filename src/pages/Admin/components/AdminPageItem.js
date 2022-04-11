import React from "react";
import { ENROLL_URL } from "../../../shared/constans";

export const AdminPageItem = ({
    id,
    name,
    surname,
    phone,
    service,
    setList,
    list,
    pos,
}) => {
    const deleteEnroll = async (enrollId) => {
        const areYouSure = window.confirm("Are you sure?");
        if (areYouSure) {
            const response = await fetch(ENROLL_URL + enrollId, {
                method: "DELETE",
            });
            if (response.ok) {
                setList(list.filter((item) => item.id !== enrollId));
            } else {
                console.log("error");
            }
        }
    };

    return (
        <div className="adminPage__item">
            <div
                onClick={() => deleteEnroll(id)}
                className="adminPage__item-delete"
            >
                &#10008;
            </div>
            <h3 className="adminPage__item-title">Заявка №{pos + 1}</h3>
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
