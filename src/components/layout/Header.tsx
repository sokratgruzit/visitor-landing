import React from "react";

import Button from "../ui/button/Button";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
    const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

    const handleScroll = (id: string) => {
        if (typeof window === "undefined") return; // на сервере ничего не делаем
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>VisiTOR</div>
            <nav className={styles.nav}>
                <a 
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("about");
                    }}
                >О продукте</a>
                <a 
                    href="#how"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("how");
                    }}
                >Как это работает</a>
                <a 
                    href="#demo"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll("demo");
                    }}
                >Демо</a>
            </nav>
            <div className={styles.auth}>
                <Button
                    text="Вход"
                    onClick={() => window.location.href = `${siteUrl}/login`}
                    size={"regular"}
                    borderColor="rgba(255, 255, 255, .3)"
                    className="regularBtn"
                    delay={1}
                    bg="transparent"
                />
                <Button
                    text="Регистрация"
                    onClick={() => window.location.href = `${siteUrl}/register`}
                    size={"regular"}
                    borderColor="rgba(255, 255, 255, .3)"
                    delay={2}
                    className="regularBtn"
                    bg="transparent"
                />
            </div>
        </header>
    )
};