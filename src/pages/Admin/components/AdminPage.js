import React from "react";
import { useDataFromServer } from "../../../shared/hooks";
import { AdminPageItem } from "./AdminPageItem";

export const AdminPage = () => {
    const [list] = useDataFromServer(
        "https://622a3b7fbe12fc4538b614ed.mockapi.io/Enrolls"
    );
    const enrollList = list.map((item) => {
        return (
            <AdminPageItem
                key={item.id}
                id={item.id}
                name={item.name}
                surname={item.surname}
                phone={item.phone}
                service={item.service}
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
