import React, { useRef } from "react";

export const LoginForm = ({ setShowAdminPage }) => {
    const login = useRef();
    const password = useRef();

    const submitLoginForm = (e) => {
        e.preventDefault();
        if (
            login.current.value === "g322h" &&
            password.current.value === "123"
        ) {
            setShowAdminPage(true);
        } else {
            alert("Неправильный логин или пароль");
        }
    };

    return (
        <form onSubmit={submitLoginForm} className="login">
            <div className="login__inner">
                <h2 className="login__title">Login</h2>
                <div className="login__inputs">
                    <input
                        type="text"
                        placeholder="admin"
                        ref={login}
                        required
                    />
                    <input
                        type="password"
                        placeholder="password"
                        ref={password}
                        required
                    />
                    <button type="submit">Отправить</button>
                </div>
            </div>
        </form>
    );
};
