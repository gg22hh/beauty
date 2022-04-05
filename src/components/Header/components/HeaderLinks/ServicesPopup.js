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
                <Link to="/">уход</Link>
            </li>
            <li>
                <Link to="/">укладки</Link>
            </li>
            <li>
                <Link to="/">биозавивка</Link>
            </li>
            <li>
                <Link to="/">ногтевой сервис</Link>
            </li>
            <li>
                <Link to="/">визаж</Link>
            </li>
            <li>
                <Link to="/">перманентный макияж</Link>
            </li>
            <li>
                <Link to="/">МАССАЖ</Link>
            </li>
            <li>
                <Link to="/">солярий</Link>
            </li>
            <li>
                <Link to="/">эндосфера</Link>
            </li>
        </ul>
    );
};
