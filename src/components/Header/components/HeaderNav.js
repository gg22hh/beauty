import React from "react";

export const HeaderNav = () => {
    return (
        <nav className="header__navigation">
            <ul>
                <li className="header__navigation-item">
                    <a href="/">услуги</a>
                </li>
                <li className="header__navigation-item">
                    <a href="/">косметология</a>
                </li>
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
