import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <span>© {year} VisiTOR. Все права защищены.</span>
            </div>
            <div className={styles.row}>
                <span>ИНН: 772317422087 | Email: tavadzed@gmail.com | Тел: +7 929 929-34-79</span>
            </div>
            <div className={styles.row}>
                <Link href="/user-agreement" target="_blank" rel="noopener noreferrer">
                    Пользовательское соглашение
                </Link>
            </div>
        </footer>
    );
};
