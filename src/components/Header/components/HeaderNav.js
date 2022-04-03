import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavCosmetology } from "./HeaderLinks/NavCosmetology";
import { NavServices } from "./HeaderLinks/NavServices";

export const HeaderNav = () => {
    const [services, setServices] = useState(false);
    const [cosmetology, setCosmetology] = useState(false);

    return (
        <nav className="header__navigation">
            <ul>
                <NavServices
                    services={services}
                    setServices={setServices}
                    cosmetology={cosmetology}
                    setCosmetology={setCosmetology}
                />
                <NavCosmetology
                    cosmetology={cosmetology}
                    setCosmetology={setCosmetology}
                    services={services}
                    setServices={setServices}
                />
                <li className="header__navigation-item">
                    <Link to="/portfolio">портфолио</Link>
                </li>
                <li className="header__navigation-item">
                    <Link to="/specialisti">специалисты</Link>
                </li>
                <li className="header__navigation-item">
                    <Link to="/akcii">акции</Link>
                </li>
            </ul>
        </nav>
    );
};
