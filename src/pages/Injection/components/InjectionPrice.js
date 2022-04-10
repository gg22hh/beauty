import React, { useState } from "react";
import { ButtonEnroll } from "../../../components/Buttons/ButtonEnroll";
import { ButtonSale } from "../../../components/Buttons/ButtonSale";
import { ButtonWhite } from "../../../components/Buttons/ButtonWhite";
import { mapItem } from "../../../shared/functions";
import { usePricesFromServer } from "../../../shared/hooks";

export const InjectionPrice = () => {
    const [showAll, setShowAll] = useState(false);

    const intra = usePricesFromServer("intra");
    const bio = usePricesFromServer("bio");
    const biorev = usePricesFromServer("biorev");
    const botulin = usePricesFromServer("botulin");
    const contur = usePricesFromServer("contur");
    const mezo = usePricesFromServer("mezo");
    const plazmo = usePricesFromServer("plazmo");

    const intraPriceList = mapItem(intra);
    const bioPriceList = mapItem(bio);
    const biorevPriceList = mapItem(biorev);
    const botulinPriceList = mapItem(botulin);
    const conturPriceList = mapItem(contur);
    const mezoPriceList = mapItem(mezo);
    const plazmoPriceList = mapItem(plazmo);

    return (
        <section className="manicurePrice">
            <div className="container">
                <h1 className="manicurePrice__title">СТОИМОСТЬ</h1>
                <div className="manicurePrice__item">
                    <div className="manicurePrice__item-title">
                        Интралипотерапия
                    </div>
                    <div className="manicurePrice__item-list">
                        {intraPriceList}
                    </div>
                </div>
                {showAll && (
                    <>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Биорепарация
                            </div>
                            <div className="manicurePrice__item-list">
                                {bioPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                мезотерапия
                            </div>
                            <div className="manicurePrice__item-list">
                                {mezoPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Контурная пластика
                            </div>
                            <div className="manicurePrice__item-list">
                                {conturPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Биоревитализация
                            </div>
                            <div className="manicurePrice__item-list">
                                {biorevPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Ботулинотерапия
                            </div>
                            <div className="manicurePrice__item-list">
                                {botulinPriceList}
                            </div>
                        </div>
                        <div className="manicurePrice__item">
                            <div className="manicurePrice__item-title">
                                Плазмотерапия
                            </div>
                            <div className="manicurePrice__item-list">
                                {plazmoPriceList}
                            </div>
                        </div>
                    </>
                )}
                <div
                    onClick={() => setShowAll(!showAll)}
                    className="manicurePrice__button"
                >
                    <ButtonWhite>
                        {showAll ? "Показать меньше" : "Показать еще"}{" "}
                    </ButtonWhite>
                </div>
                <div className="manicurePrice__buttons">
                    <ButtonSale>получить скидку 20% на первый визит</ButtonSale>
                    <ButtonEnroll>записаться онлайн</ButtonEnroll>
                </div>
            </div>
        </section>
    );
};
