import React from "react";
import "./Header.scss";
import Logo from "../../shared/images/header/header-logo.png";
import { HeaderNav } from "./components/HeaderNav";
import { ButtonRed } from "../Buttons/ButtonRed";

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="header__logo">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <HeaderNav />
                    <div className="header__schedule">
                        <span>ПН. - ВС. 10:00 - 22:00</span>
                        <ButtonRed>записаться</ButtonRed>
                    </div>
                </div>
            </div>
        </div>
    );
};
