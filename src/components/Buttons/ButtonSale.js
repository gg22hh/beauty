import React, { useState } from "react";
import { Sale } from "../Sale/Sale";
import { ButtonRed } from "./ButtonRed";

export const ButtonSale = ({ children }) => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <div onClick={() => setShowForm(true)} className="button__sale">
                <ButtonRed>{children}</ButtonRed>
            </div>
            {showForm && <Sale setShowForm={setShowForm} />}
        </>
    );
};
