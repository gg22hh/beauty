import React, { useState } from "react";
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
                    <a href="/">портфолио</a>
                </li>
                <li className="header__navigation-item">
                    <a href="/">специалисты</a>
                </li>
                <li className="header__navigation-item">
                    <a href="/">акции</a>
                </li>
            </ul>
        </nav>
    );
};
