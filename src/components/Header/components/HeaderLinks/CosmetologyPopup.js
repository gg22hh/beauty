import React from "react";
import { Link } from "react-router-dom";

export const CosmetologyPopup = () => {
    return (
        <ul className="cosmetology__popup-list">
            <li>
                <Link to="/инъекционнаякосметология">
                    инъекционная косметология
                </Link>
            </li>
            <li>
                <Link to="/эстетическаякосметология">
                    эстетическая косметология
                </Link>
            </li>
            <li>
                <Link to="/аппаратнаякосметология">
                    аппаратная косметология
                </Link>
            </li>
        </ul>
    );
};
