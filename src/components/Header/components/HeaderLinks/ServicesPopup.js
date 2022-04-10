import React from "react";
import { Link } from "react-router-dom";

export const ServicesPopup = () => {
    return (
        <>
            <li>
                <Link to="/haircuts">стрижки</Link>
            </li>
            <li>
                <Link to="/staining">окрашивание</Link>
            </li>
            <li>
                <Link to="/care">уход</Link>
            </li>
            <li>
                <Link to="/styling">укладки</Link>
            </li>
            <li>
                <Link to="/biowave">биозавивка</Link>
            </li>
            <li>
                <Link to="/manicure">ногтевой сервис</Link>
            </li>
            <li>
                <Link to="/makeup">визаж</Link>
            </li>
            <li>
                <Link to="/permanentmakeup">перманентный макияж</Link>
            </li>
            <li>
                <Link to="/massage">МАССАЖ</Link>
            </li>
            <li>
                <Link to="/solarium">солярий</Link>
            </li>
            <li>
                <Link to="/endosphere">эндосфера</Link>
            </li>
        </>
    );
};
