import React from "react";
import { ENROLL_URL } from "../../../shared/constans";
import { useEnrollFromServer } from "../../../shared/hooks";
import { AdminPageItem } from "./AdminPageItem";

export const AdminPage = () => {
    const [list, setList] = useEnrollFromServer(ENROLL_URL);
    const enrollList = list.map((item, pos) => {
        return (
            <AdminPageItem
                key={item.id}
                id={item.id}
                pos={pos}
                name={item.name}
                surname={item.surname}
                phone={item.phone}
                service={item.service}
                setList={setList}
                list={list}
            />
        );
    });
    return (
        <div className="adminPage">
            <h1 className="adminPage__title">Заявки</h1>
            <div className="adminPage__inner">{enrollList}</div>
        </div>
    );
};
