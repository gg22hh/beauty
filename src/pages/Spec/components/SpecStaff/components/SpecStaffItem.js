import React from "react";
import { Link } from "react-router-dom";
import { ButtonRed } from "../../../../../components/Buttons/ButtonRed";
import { ButtonWhite } from "../../../../../components/Buttons/ButtonWhite";

export const SpecStaffItem = ({
    position,
    id,
    image,
    name,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
}) => {
    return (
        <div className="specStaff__item">
            <div className="specStaff__item-image">
                <img src={image} alt="spec" />
            </div>
            <div className="specStaff__item-position">{position}</div>
            <h4 className="specStaff__item-name">{name}</h4>
            <div className="specStaff__item-skill">
                <strong>Опыт работы: </strong>
                {skill1}
            </div>
            <div className="specStaff__item-skill">
                <strong>Специализация: </strong>
                {skill2}
            </div>
            <div className="specStaff__item-skill">
                <strong>Образование: </strong>
                {skill3}
            </div>
            <div className="specStaff__item-skill">
                <strong>Повышение квалификации: </strong>
                {skill4}
            </div>
            <div className="specStaff__item-skill">
                <strong>Специализация: </strong>
                {skill5}
            </div>
            <div className="specStaff__item-skill">
                <strong>Хобби: </strong>
                {skill6}
            </div>
            <div className="specStaff__item-buttons">
                <Link to={`/специалист${id}`}>
                    <ButtonWhite>О мастере</ButtonWhite>
                </Link>
                <ButtonRed>записаться</ButtonRed>
            </div>
        </div>
    );
};
