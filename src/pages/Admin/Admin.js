import React, { useState } from "react";
import "./Admin.scss";
import { AdminPage } from "./components/AdminPage";
import { LoginForm } from "./components/LoginForm";

export const Admin = () => {
    const [showAdminPage, setShowAdminPage] = useState(false);

    return (
        <section className="admin">
            {showAdminPage ? (
                <AdminPage />
            ) : (
                <LoginForm setShowAdminPage={setShowAdminPage} />
            )}
        </section>
    );
};
