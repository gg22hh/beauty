import React from "react";
import { enrollData } from "../../../shared/projectData";
import { EnrollWrapperItems } from "./EnrollWrapperItems";

export const EnrollItems2 = ({ show2 }) => {
    const enrollDataList = enrollData.map((item) => {
        return (
            <EnrollWrapperItems
                key={item.id}
                name={item.name}
                value1={item.value1}
                value2={item.value2}
                value3={item.value3}
            />
        );
    });

    return <>{show2 && enrollDataList}</>;
};
