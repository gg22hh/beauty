import React from "react";
import { Route } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { STAFF_URL } from "../../shared/constans";
import { useDataFromServer } from "../../shared/hooks";
import { StaffItem } from "./StaffItem";

export const Staff = () => {
    const [staff, loader] = useDataFromServer(STAFF_URL);

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
                loader={loader}
            />
        );
    });

    const routeList = staffList.map((page, index) => {
        return (
            <Route key={index} path={`/specialists/specialist${index + 1}`}>
                {page}
            </Route>
        );
    });

    return <>{loader ? <Loader /> : routeList}</>;
};
