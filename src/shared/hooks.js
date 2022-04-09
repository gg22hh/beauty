import { useState } from "react";

export const useSelectItem = (initialValue) => {
    const [select, setSelect] = useState(initialValue);
    const [show, setShow] = useState(false);

    const selectItem = (e) => {
        setSelect(e.target.innerText);
        setShow(false);
    };

    return [select, show, setShow, selectItem];
};
