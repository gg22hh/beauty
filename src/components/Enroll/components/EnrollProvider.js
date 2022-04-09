import React, { createContext, useContext } from "react";

const EnrollContext = createContext();

export const useEnrollProps = () => useContext(EnrollContext);

export const EnrollProvider = ({ children, select, selectItem2 }) => {
    return (
        <EnrollContext.Provider value={{ select, selectItem2 }}>
            {children}
        </EnrollContext.Provider>
    );
};
