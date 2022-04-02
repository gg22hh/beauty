import React from "react";
import { CSSTransition } from "react-transition-group";
import { CosmetologyPopup } from "./CosmetologyPopup";

export const NavCosmetology = ({
    cosmetology,
    setCosmetology,
    setServices,
    services,
}) => {
    const nandleClick = () => {
        if (services) {
            setServices(false);
        }

        setCosmetology(!cosmetology);
    };

    return (
        <li
            onClick={nandleClick}
            className="header__navigation-item cosmetology__popup"
        >
            косметология
            <span
                className={
                    cosmetology
                        ? "header__navigation-arrow active"
                        : "header__navigation-arrow"
                }
            ></span>
            <CSSTransition
                in={cosmetology}
                classNames="cosmetology__popup-list"
                timeout={200}
            >
                <CosmetologyPopup />
            </CSSTransition>
        </li>
    );
};
