import React from "react";
import "./HaircutsPortfolio.scss";
import { ButtonRed } from "../../../../components/Buttons/ButtonRed";
import haircut1 from "../../../../shared/images/Haircuts/haircut1.jpg";
import haircut2 from "../../../../shared/images/Haircuts/haircut2.jpg";
import haircut3 from "../../../../shared/images/Haircuts/haircut3.jpg";

export const HaircutsPortfolio = () => {
    return (
        <section className="haircutsPortfolio">
            <div className="container">
                <div className="haircutsPortfolio__inner">
                    <div className="haircutsPortfolio__item">
                        <div className="haircutsPortfolio__item-image">
                            <img src={haircut1} alt="haircut1" />
                        </div>
                        <h4 className="haircutsPortfolio__item-title">
                            женская стрижка
                        </h4>
                        <div className="haircutsPortfolio__item-price">
                            от 1500 р
                        </div>
                        <div className="haircutsPortfolio__item-button">
                            <ButtonRed>записаться</ButtonRed>
                        </div>
                    </div>
                    <div className="haircutsPortfolio__item">
                        <div className="haircutsPortfolio__item-image">
                            <img src={haircut2} alt="haircut1" />
                        </div>
                        <h4 className="haircutsPortfolio__item-title">
                            мужская стрижка
                        </h4>
                        <div className="haircutsPortfolio__item-price">
                            от 1100 р
                        </div>
                        <div className="haircutsPortfolio__item-button">
                            <ButtonRed>записаться</ButtonRed>
                        </div>
                    </div>
                    <div className="haircutsPortfolio__item">
                        <div className="haircutsPortfolio__item-image">
                            <img src={haircut3} alt="haircut1" />
                        </div>
                        <h4 className="haircutsPortfolio__item-title">
                            детская стрижка
                        </h4>
                        <div className="haircutsPortfolio__item-price">
                            от 500 р
                        </div>
                        <div className="haircutsPortfolio__item-button">
                            <ButtonRed>записаться</ButtonRed>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
