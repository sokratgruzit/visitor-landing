"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Constructor.module.css";

export const Constructor: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        "/images/page1.png",
        "/images/page2.png",
        "/images/page3.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage(prev => (prev + 1) % pages.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [pages.length]);

    return (
        <div className={styles.container}>
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
        </div>
    )
};