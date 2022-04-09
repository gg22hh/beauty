import { useEffect, useState } from "react";

export const useSelectItem = (initialValue) => {
    const [select, setSelect] = useState(initialValue);
    const [show, setShow] = useState(false);

    const selectItem = (e) => {
        setSelect(e.target.innerText);
        setShow(false);
    };

    return [select, show, setShow, selectItem];
};

export const useDataFromServer = (url) => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        const getData = async () => {
            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                setData(json);
                setLoader(false);
            }
        };
        getData();
    }, [url]);

    return [data, loader];
};
