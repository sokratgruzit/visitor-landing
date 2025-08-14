"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import styles from "./page.module.css";

export default function ProductPage() {
    const pages = [
        "/images/page1.png",
        "/images/page2.png",
        "/images/page3.png"
    ];

    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
    const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

    return (
        <div className={styles.page}>
            <div style={{ marginTop: 30, marginLeft: 30 }}>
                <Link href="/" passHref>
                    <motion.button
                        className={styles.backButton}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ← Вернуться на главную
                    </motion.button>
                </Link>
            </div>

            <div className={styles.main}>
                <div className={styles.hero}>
                    <motion.h1 
                        className={styles.title} 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        Визитка или мини-презентация за минуты
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Максимально просто: создайте сайт до 10 страниц с красивыми анимированными изображениями.
                    </motion.p>

                    <motion.div
                        className={styles.priceTag}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.5 }}
                    >
                        3300₽ / подписка
                    </motion.div>

                    <div className={styles.previewWrapper}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentPage}
                                src={pages[currentPage]}
                                alt={`Страница ${currentPage + 1}`}
                                className={styles.previewPage}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                            />
                        </AnimatePresence>
                    </div>

                    <div style={{ display: "flex", gap: 20, marginTop: 15 }}>
                        <div className={styles.button} onClick={prevPage}>
                            <img src="/images/arrow.svg" alt="arrow" style={{ transform: "rotate(90deg)"}} className={styles.icon} />
                        </div>
                        <div className={styles.button} onClick={nextPage}>
                            <img src="/images/arrow.svg" alt="arrow" style={{ transform: "rotate(-90deg)"}} className={styles.icon} />
                        </div>
                    </div>

                    <motion.p
                        className={styles.productDescription}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1 }}
                    >
                        Сервис visiTOR позволяет создавать красивые сайты-визитки и презентации до 10 страниц. 
                        Вы можете вставлять анимированные изображения, текст, кнопки и менять порядок страниц. 
                        Всё просто, красиво и быстро.
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
