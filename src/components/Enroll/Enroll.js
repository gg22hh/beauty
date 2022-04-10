import React, { useRef } from "react";
import { useSelectItem } from "../../shared/hooks";
import { EnrollItems } from "./components/EnrollItems";
import { EnrollItems2 } from "./components/EnrollItems2";
import { EnrollProvider } from "./components/EnrollProvider";
import "./Enroll.scss";

export const Enroll = ({ setShowForm }) => {
    const [select, show, setShow, selectItem] =
        useSelectItem("Выберите категорию");
    const [select2, show2, setShow2, selectItem2] = useSelectItem("Выберите");

    const closeEnrollForm = () => {
        setShowForm(false);
        document.body.style.overflow = "unset";
    };
    const name = useRef("");
    const surname = useRef("");
    const phone = useRef();

    const submitForm = async (e) => {
        e.preventDefault();
        closeEnrollForm();
        const enrollData = {
            name: name.current.value,
            surname: surname.current.value,
            phone: phone.current.value,
            service: select2,
        };
        console.log(enrollData);
        await fetch("https://622a3b7fbe12fc4538b614ed.mockapi.io/Enrolls", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(enrollData),
        });
    };

    return (
        <>
            <div className="form enroll">
                <form onSubmit={submitForm}>
                    <div onClick={closeEnrollForm} className="form__close">
                        &#10008;
                    </div>
                    <div className="form__title">Запись онлайн</div>
                    <input type="text" placeholder="Имя" required ref={name} />
                    <input
                        type="text"
                        placeholder="Фамилия"
                        required
                        ref={surname}
                    />
                    <input
                        type="tel"
                        placeholder="+7(777)-777-77-77"
                        ref={phone}
                        required
                    />
                    <div className="form__wrapper ">
                        <div
                            onClick={() => setShow(!show)}
                            className="form__wrapper-select"
                        >
                            {select}
                        </div>
                        <EnrollItems show={show} selectItem={selectItem} />
                    </div>
                    <div
                        onClick={() => setShow2(!show2)}
                        className="form__wrapper2 "
                    >
                        <div className="form__wrapper-select">{select2}</div>
                        <EnrollProvider
                            select={select}
                            selectItem2={selectItem2}
                        >
                            <EnrollItems2 show2={show2} />
                        </EnrollProvider>
                    </div>
                    <button type="submit" className="form__button">
                        Отправить
                    </button>
                </form>
            </div>
            <div onClick={closeEnrollForm} className="form__overlay"></div>
        </>
    );
};
