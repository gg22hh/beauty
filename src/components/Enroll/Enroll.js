import React, { useState } from "react";
import "./Enroll.scss";

export const Enroll = ({ setShowForm }) => {
    const [select, setSelect] = useState("Выберите категорию");
    const [underSelect, setUnderSelect] = useState("Выберите");
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        setShowForm(false);
    };

    const selectItem = (e) => {
        setSelect(e.target.innerText);
        setShow(false);
    };
    const selectItem2 = (e) => {
        setUnderSelect(e.target.innerText);
        setShow2(false);
    };

    return (
        <>
            <div className="form enroll">
                <form onSubmit={submitForm}>
                    <div
                        onClick={() => setShowForm(false)}
                        className="form__close"
                    >
                        &#10008;
                    </div>
                    <div className="form__title">Запись онлайн</div>
                    <input type="text" placeholder="Имя" required />
                    <input type="text" placeholder="Фамилия" required />
                    <input
                        type="tel"
                        placeholder="+7(777)-777-77-77"
                        required
                    />
                    <div className="form__wrapper ">
                        <div
                            onClick={() => setShow(!show)}
                            className="form__wrapper-select"
                        >
                            {select}
                        </div>
                        {show && (
                            <div className="form__wrapper-items ">
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    стрижки
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    окрашивание
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    уход
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    укладки
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    биозавивка
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    ногтевой сервис
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    визаж
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    перманентный макияж
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    массаж
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    инъекционная косметология
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    эстетическая косметология
                                </div>
                                <div
                                    onClick={selectItem}
                                    className="form__wrapper-item"
                                >
                                    аппаратная косметология
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        onClick={() => setShow2(!show2)}
                        className="form__wrapper2 "
                    >
                        <div className="form__wrapper-select">
                            {underSelect}
                        </div>
                        {show2 && (
                            <>
                                {select === "СТРИЖКИ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            Женская стрижка
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            Мужская стрижка
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            Детская стрижка
                                        </div>
                                    </div>
                                )}
                                {select === "ОКРАШИВАНИЕ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            окрашивание
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            милирование
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            колорирование
                                        </div>
                                    </div>
                                )}
                                {select === "УХОД" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            МАСКА PRO FIBER LOREAL
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            ЭКСПРЕСС УХОД ОТ LEBEL
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            СПА ПРОГРАММА
                                        </div>
                                    </div>
                                )}
                                {select === "УКЛАДКИ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            УКЛАДКА ПОВСЕДНЕВНАЯ
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            УКЛАДКА КОКТЕЙЛЬНАЯ
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            КОСЫ ДЛЯ ДЕВОЧЕК
                                        </div>
                                    </div>
                                )}
                                {select === "БИОЗАВИВКА" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            короткая биозавивка
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            средняя биозавивка
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            длинная биозавивка
                                        </div>
                                    </div>
                                )}
                                {select === "НОГТЕВОЙ СЕРВИС" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            женский маникюр
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            наращивание
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            педикюр
                                        </div>
                                    </div>
                                )}
                                {select === "ВИЗАЖ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            макияж
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            брови
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            ресницы
                                        </div>
                                    </div>
                                )}
                                {select === "ПЕРМАНЕНТНЫЙ МАКИЯЖ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            брови
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            губы
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            глаза
                                        </div>
                                    </div>
                                )}
                                {select === "МАССАЖ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            классический массаж
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            антицеллюлитный массаж
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            арома массаж
                                        </div>
                                    </div>
                                )}
                                {select === "ИНЪЕКЦИОННАЯ КОСМЕТОЛОГИЯ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            контурная пластика
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            биоревитализация
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            плазмотерапия
                                        </div>
                                    </div>
                                )}
                                {select === "ЭСТЕТИЧЕСКАЯ КОСМЕТОЛОГИЯ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            чистки
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            пилинги
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            маски
                                        </div>
                                    </div>
                                )}
                                {select === "АППАРАТНАЯ КОСМЕТОЛОГИЯ" && (
                                    <div className="form__wrapper2-items ">
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            газожидкостный пилинг
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            радиоволновой лифинг
                                        </div>
                                        <div
                                            onClick={selectItem2}
                                            className="form__wrapper2-item"
                                        >
                                            термолифтинг
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <button type="submit" className="form__button">
                        Отправить
                    </button>
                </form>
            </div>
            <div
                onClick={() => setShowForm(false)}
                className="form__overlay"
            ></div>
        </>
    );
};
