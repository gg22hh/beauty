import React from "react";
import { Connection } from "../Home/components/Connection/Connection";
import { StocksAdvantage } from "./components/StocksAdvantage/StocksAdvantage";
import { StocksBanner } from "./components/StocksBanner/StocksBanner";
import { StocksBenefits } from "./components/StocksBenefits/StocksBenefits";
import { StocksPrivilege } from "./components/StocksPrivilege/StocksPrivilege";

export const Stocks = () => {
    return (
        <>
            <StocksBanner />
            <StocksBenefits />
            <StocksPrivilege />
            <StocksAdvantage />
            <Connection />
        </>
    );
};
