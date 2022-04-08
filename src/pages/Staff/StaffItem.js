import React from "react";
import "./Staff.scss";
import { Link } from "react-router-dom";
import { Connection } from "../Home/components/Connection/Connection";
import { ButtonSale } from "../../components/Buttons/ButtonSale";
import { ButtonEnroll } from "../../components/Buttons/ButtonEnroll";

export const StaffItem = ({
    image,
    name,
    position,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
}) => {
    return (
        <>
            <section className="staffItem">
                <div className="container">
                    <div className="staffItem__inner">
                        <div className="staffItem__image">
                            <img src={image} alt="spec" />
                        </div>
                        <div className="staffItem__info">
                            <h1 className="staffItem__name">{name}</h1>
                            <div className="staffItem__position">
                                {position}
                            </div>
                            <div className="staffItem__skill">
                                <strong>Опыт работы: </strong>
                                {skill1}
                            </div>
                            <div className="staffItem__skill">
                                <strong>Специализация: </strong>
                                {skill2}
                            </div>
                            <div className="staffItem__skill">
                                <strong>Образование: </strong>
                                {skill3}
                            </div>
                            <div className="staffItem__skill">
                                <strong>Повышение квалификации: </strong>
                                {skill4}
                            </div>
                            <div className="staffItem__skill">
                                <strong>Специализация: </strong>
                                {skill5}
                            </div>
                            <div className="staffItem__skill">
                                <strong>Хобби: </strong>
                                {skill6}
                            </div>
                            <Link
                                to={"/специалисты"}
                                className="staffItem__button"
                            >
                                Назад
                            </Link>
                        </div>
                    </div>
                    <div className="staffItem__buttons">
                        <ButtonSale>
                            получить скидку 20% на первый визит
                        </ButtonSale>
                        <ButtonEnroll>записаться онлайн</ButtonEnroll>
                    </div>
                </div>
            </section>
            <Connection />
        </>
    );
};
