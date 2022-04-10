import React from "react";
import { Link } from "react-router-dom";

export const CosmetologyPopup = () => {
    return (
        <>
            <li>
                <Link to="/injectioncosmetology">
                    инъекционная косметология
                </Link>
            </li>
            <li>
                <Link to="/aestheticcosmetology">
                    эстетическая косметология
                </Link>
            </li>
            <li>
                <Link to="/hardwarecosmetology">аппаратная косметология</Link>
            </li>
        </>
    );
};
