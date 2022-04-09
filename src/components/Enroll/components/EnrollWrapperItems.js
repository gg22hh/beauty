import React from "react";
import { useEnrollProps } from "./EnrollProvider";

export const EnrollWrapperItems = ({ name, value1, value2, value3 }) => {
    const { select, selectItem2 } = useEnrollProps();

    return (
        <>
            {select === name && (
                <div className="form__wrapper2-items ">
                    <div onClick={selectItem2} className="form__wrapper2-item">
                        {value1}
                    </div>
                    <div onClick={selectItem2} className="form__wrapper2-item">
                        {value2}
                    </div>
                    <div onClick={selectItem2} className="form__wrapper2-item">
                        {value3}
                    </div>
                </div>
            )}
        </>
    );
};
