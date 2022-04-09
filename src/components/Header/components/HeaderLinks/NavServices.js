import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ServicesPopup } from "./ServicesPopup";

export const NavServices = ({
    services,
    setServices,
    setCosmetology,
    cosmetology,
}) => {
    const nodeRef = useRef(null);
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
                nodeRef={nodeRef}
                in={services}
                classNames="services__popup-list"
                timeout={200}
            >
                <ul ref={nodeRef} className="services__popup-list">
                    <ServicesPopup />
                </ul>
            </CSSTransition>
        </li>
    );
};
