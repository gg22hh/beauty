import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../shared/images/header/header-logo.png";
import { HeaderNav } from "./components/HeaderNav";
import { Link } from "react-router-dom";
import { ButtonEnroll } from "../Buttons/ButtonEnroll";

export const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="header__logo">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div
                        className={
                            menu ? "header__info active" : "header__info"
                        }
                    >
                        <HeaderNav />
                        <div className="header__schedule">
                            <span>ПН. - ВС. 10:00 - 22:00</span>
                            <ButtonEnroll color="red">записаться</ButtonEnroll>
                        </div>
                    </div>
                    <button
                        onClick={() => setMenu(!menu)}
                        className={
                            menu ? "header__burger active" : "header__burger"
                        }
                    >
                        <span></span>
                    </button>
                </div>
                {menu && (
                    <div
                        onClick={() => setMenu(false)}
                        className="header__overlay"
                    ></div>
                )}
            </div>
        </div>
    );
};
