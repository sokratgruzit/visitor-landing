import React from "react";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            © {year} VisiTOR. Все права защищены.
        </footer>
    )
};