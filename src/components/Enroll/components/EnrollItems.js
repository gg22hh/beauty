import React from "react";

export const EnrollItems = ({ show, selectItem }) => {
    return (
        <>
            {show && (
                <div className="form__wrapper-items ">
                    <div onClick={selectItem} className="form__wrapper-item">
                        стрижки
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        окрашивание
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        уход
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        укладки
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        биозавивка
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        ногтевой сервис
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        визаж
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        перманентный макияж
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        массаж
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        инъекционная косметология
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        эстетическая косметология
                    </div>
                    <div onClick={selectItem} className="form__wrapper-item">
                        аппаратная косметология
                    </div>
                </div>
            )}
        </>
    );
};
