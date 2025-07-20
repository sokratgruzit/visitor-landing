import React from "react";
import { motion } from "framer-motion";
import styles from "./Circles.module.css";

const CIRCLE_COUNT = 50;

export const Circles: React.FC = () => {
    const circles = Array.from({ length: CIRCLE_COUNT }, (_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 50 + Math.random() * 100; // 50–150 px
        const duration = 0.8 + Math.random() * 0.8; // 0.8–1.6 сек
        const delay = 3.5 + Math.random() * 0.5; // 0.3–0.8 сек

        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
            <motion.div
                key={i}
                className={styles.circle}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{
                    x,
                    y,
                    scale: 1,
                    opacity: [0, 1, 0]
                }}
                transition={{
                    x: { duration, delay, ease: "easeOut" },
                    y: { duration, delay, ease: "easeOut" },
                    scale: { duration, delay, ease: "easeOut" },
                    opacity: {
                        duration,
                        delay,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                    }
                }}
                style={{ willChange: "transform, opacity" }}
            />
        );
    });

    return <div className={styles.wrapper}>{circles}</div>;
};
