import React from "react";
import { BannerItem } from "../../components/BannerItem/BannerItem";
import biowaveBanner from "../../shared/images/Biowave/biowaveBanner.png";
import { Benefits } from "../Home/components/Benefits/Benefits";
import { Connection } from "../Home/components/Connection/Connection";
import { BiowavePrice } from "./BiowavePrice/BiowavePrice";

export const Biowave = () => {
    return (
        <>
            <BannerItem
                title="биозавивка для волос в салоне красоты simada"
                text="Биозавивка волос – отличный шанс заполучить шикарные и здоровые кудри"
                image={biowaveBanner}
            />
            <BiowavePrice />
            <Benefits />
            <Connection />
        </>
    );
};
