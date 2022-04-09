import React from "react";
import styles from "./Loader.module.css";
import loader from "../../shared/images/Loader.gif";

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" />
        </div>
    );
};
