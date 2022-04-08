import React, { useState } from "react";
import { Enroll } from "../Enroll/Enroll";
import { ButtonRed } from "./ButtonRed";
import { ButtonWhite } from "./ButtonWhite";

export const ButtonEnroll = ({ children, color = "white" }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {color === "red" && (
                <div onClick={() => setShowForm(true)} className="button__sale">
                    <ButtonRed>{children}</ButtonRed>
                </div>
            )}

            {color === "white" && (
                <div onClick={() => setShowForm(true)} className="button__sale">
                    <ButtonWhite>{children}</ButtonWhite>
                </div>
            )}

            {showForm && <Enroll setShowForm={setShowForm} />}
        </>
    );
};
