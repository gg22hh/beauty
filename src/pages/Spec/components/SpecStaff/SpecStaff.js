import React, { useState } from "react";
import { SpecStaffItem } from "./components/SpecStaffItem";
import "./SpecStaff.scss";
import { STAFF_URL } from "../../../../shared/constans";
import { useDataFromServer } from "../../../../shared/hooks";
import { Loader } from "../../../../components/Loader/Loader";

export const SpecStaff = () => {
    const [showAll, setShowAll] = useState(true);
    const [staff, loader] = useDataFromServer(STAFF_URL);
    const workers = showAll ? staff.slice(0, 3) : staff;

    const specStaffList = workers.map((item) => {
        return (
            <SpecStaffItem
                key={item.id}
                id={item.id}
                image={item.image}
                position={item.position}
                name={item.name}
                skill1={item.skill1}
                skill2={item.skill2}
                skill3={item.skill3}
                skill4={item.skill4}
                skill5={item.skill5}
                skill6={item.skill6}
            />
        );
    });

    return (
        <section className="specStaff">
            <div className="container">
                <h1 className="specStaff__title">специалисты</h1>
                {loader ? (
                    <Loader />
                ) : (
                    <>
                        <div className="specStaff__inner">{specStaffList}</div>
                        <button
                            className="specStaff__button"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Показать еще" : "Показать меньше"}
                        </button>
                    </>
                )}
            </div>
        </section>
    );
};
