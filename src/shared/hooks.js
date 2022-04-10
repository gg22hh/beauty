import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

export const useScrollToTop = () => {
    const history = useHistory();

    useEffect(() => {
        history.listen(() => window.scrollTo({ top: 0 }));
    }, [history]);
};

export const usePricesFromServer = (name) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                "https://622a3b7fbe12fc4538b614ed.mockapi.io/Prices"
            );
            if (response.ok) {
                const json = await response.json();
                const prices = json.filter((item) => {
                    if (item.name === name) return item;
                    return null;
                });
                setList(prices[0].data);
            } else {
                console.log("error");
            }
        };
        getData();
    }, [name]);

    return list;
};
