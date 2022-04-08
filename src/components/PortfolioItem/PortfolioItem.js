import React from "react";
import "./PortfolioItem.scss";
import { ButtonEnroll } from "../Buttons/ButtonEnroll";

export const PortfolioItem = ({
    image1,
    image2,
    image3,
    title1,
    title2,
    title3,
    price1,
    price2,
    price3,
}) => {
    return (
        <section className="portfolioItem">
            <div className="container">
                <div className="portfolioItem__inner">
                    <div className="portfolioItem__item">
                        <div className="portfolioItem__item-image">
                            <img src={image1} alt="haircut1" />
                        </div>
                        <h4 className="portfolioItem__item-title">{title1}</h4>
                        <div className="portfolioItem__item-price">
                            {price1}
                        </div>
                        <div className="portfolioItem__item-button">
                            <ButtonEnroll color="red">записаться</ButtonEnroll>
                        </div>
                    </div>
                    <div className="portfolioItem__item">
                        <div className="portfolioItem__item-image">
                            <img src={image2} alt="haircut1" />
                        </div>
                        <h4 className="portfolioItem__item-title">{title2}</h4>
                        <div className="portfolioItem__item-price">
                            {price2}
                        </div>
                        <div className="portfolioItem__item-button">
                            <ButtonEnroll color="red">записаться</ButtonEnroll>
                        </div>
                    </div>
                    <div className="portfolioItem__item">
                        <div className="portfolioItem__item-image">
                            <img src={image3} alt="haircut1" />
                        </div>
                        <h4 className="portfolioItem__item-title">{title3}</h4>
                        <div className="portfolioItem__item-price">
                            {price3}
                        </div>
                        <div className="portfolioItem__item-button">
                            <ButtonEnroll color="red">записаться</ButtonEnroll>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
