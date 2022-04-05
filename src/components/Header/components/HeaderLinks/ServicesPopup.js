import React from "react";
import { Link } from "react-router-dom";

export const ServicesPopup = () => {
    return (
        <ul className="services__popup-list">
            <li>
                <Link to="/стрижки">стрижки</Link>
            </li>
            <li>
                <Link to="/окрашивание">окрашивание</Link>
            </li>
            <li>
                <Link to="/уход">уход</Link>
            </li>
            <li>
                <Link to="/укладки">укладки</Link>
            </li>
            <li>
                <Link to="/биозавивка">биозавивка</Link>
            </li>
            <li>
                <Link to="/ногтевойсервис">ногтевой сервис</Link>
            </li>
            <li>
                <Link to="/визаж">визаж</Link>
            </li>
            <li>
                <Link to="/перманентныймакияж">перманентный макияж</Link>
            </li>
            <li>
                <Link to="/массаж">МАССАЖ</Link>
            </li>
            <li>
                <Link to="/солярий">солярий</Link>
            </li>
            <li>
                <Link to="/эндосфера">эндосфера</Link>
            </li>
        </ul>
    );
};
