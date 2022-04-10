import React from "react";
import { mapTherapyItem } from "../../../../shared/functions";
import { usePricesFromServer } from "../../../../shared/hooks";
import "./TherapyPrice.scss";

export const TherapyPrice = () => {
    const bodyProgramm = usePricesFromServer("bodyProgramm");
    const faceProgramm = usePricesFromServer("faceProgramm");

    const therapyPriceList = mapTherapyItem(bodyProgramm);
    const therapyPriceList2 = mapTherapyItem(faceProgramm);

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
