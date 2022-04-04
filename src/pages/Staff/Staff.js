import React from "react";
import { Route } from "react-router-dom";
import { staff } from "../../shared/projectData";
import { StaffItem } from "./StaffItem";

export const Staff = () => {
    const staffList = staff.map((item) => {
        return (
            <StaffItem
                key={item.id}
                image={item.image}
                name={item.name}
                position={item.position}
                skill1={item.skill1}
                skill2={item.skill2}
                skill3={item.skill3}
                skill4={item.skill4}
                skill5={item.skill5}
                skill6={item.skill6}
            />
        );
    });

    console.log(staffList);

    const routeList = staffList.map((page, index) => {
        return (
            <Route path={`/специалисты/специалист${index + 1}`}>{page}</Route>
        );
    });

    return <>{routeList}</>;
};
