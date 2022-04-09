import React from "react";
import { bodyProgramm, faceProgramm } from "../../../../shared/projectData";
import { TherapyPriceItem } from "../TherapyPriceItem/TherapyPriceItem";
import "./TherapyPrice.scss";

export const TherapyPrice = () => {
    const therapyPriceList = bodyProgramm.map((item) => {
        return (
            <TherapyPriceItem
                key={item.id}
                title={item.title}
                price={item.price}
                text={item.text}
            />
        );
    });

    const therapyPriceList2 = faceProgramm.map((item) => {
        return (
            <TherapyPriceItem
                key={item.id}
                title={item.title}
                price={item.price}
                text={item.text}
            />
        );
    });

    return (
        <section className="therapyPrice">
            <div className="container">
                <div className="therapyPrice__box">
                    <h4 className="therapyPrice__title">программы по телу</h4>
                    <div className="therapyPrice__inner">
                        {therapyPriceList}
                    </div>
                </div>
                <div className="therapyPrice__box">
                    <h4 className="therapyPrice__title">программы по телу</h4>
                    <div className="therapyPrice__inner">
                        {therapyPriceList2}
                    </div>
                </div>
            </div>
        </section>
    );
};
