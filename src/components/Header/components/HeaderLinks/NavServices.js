import React from "react";
import { CSSTransition } from "react-transition-group";
import { ServicesPopup } from "./ServicesPopup";

export const NavServices = ({
    services,
    setServices,
    setCosmetology,
    cosmetology,
}) => {
    const nandleClick = () => {
        if (cosmetology) {
            setCosmetology(false);
        }

        setServices(!services);
    };

    return (
        <li
            onClick={nandleClick}
            className="header__navigation-item services__popup"
        >
            услуги
            <span
                className={
                    services
                        ? "header__navigation-arrow active"
                        : "header__navigation-arrow"
                }
            ></span>
            <CSSTransition
                in={services}
                classNames="services__popup-list"
                timeout={200}
            >
                <ServicesPopup />
            </CSSTransition>
        </li>
    );
};
