"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./Subscription.module.css";

export const Subscription: React.FC = () => {
    const shieldControls = useAnimation();
    const svgControls = useAnimation();
    const titleControls = useAnimation();
    const priceControls = useAnimation();

    useEffect(() => {
        shieldControls.start({
            translateX: 0, 
            opacity: [0, 1, 0],
            transition: {
                translateX: {
                    duration: .5,
                    ease: "easeInOut",
                },
                opacity: {
                    duration: 3.5,
                    ease: "easeInOut",
                    times: [0, 0.1, 1]
                }
            } 
        });

        svgControls.start({
            opacity: 1,
            transition: {
                duration: .5,
                delay: 1,
                ease: "easeInOut"
            }
        });

        titleControls.start({
            translateX: 0, 
            opacity: [0, 1, 0],
            transition: {
                translateX: {
                    duration: .5,
                    delay: .3,
                    ease: "easeInOut",
                },
                opacity: {
                    duration: 3.8,
                    delay: .3,
                    ease: "easeInOut",
                    times: [0, 0.1, 1]
                }
            }
        });

        priceControls.start({
            scale: 1, 
            opacity: 1,
            transition: {
                duration: .5,
                delay: 4,
                type: "spring",
                stiffness: 150,
                damping: 10
            }
        });
    }, []);

    return (
        <div className={styles.container}>
            <motion.div 
                className={styles.shield}
                initial={{ translateX: -100, opacity: 0 }}
                animate={shieldControls}
                style={{ willChange: "transform, opacity" }}
            >
                <svg className={styles.icon} viewBox="0 0 100 80" width="100" height="80">
                    <path d="M10 0 H90 V45 Q90 65 50 80 Q10 65 10 45 Z" fill="#FFD700" stroke="#222" strokeWidth="2" />
                </svg>
                <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="800px" 
                    height="800px" 
                    viewBox="0 0 48 48" 
                    className={styles.icon2}
                    initial={{ opacity: 0 }}
                    animate={svgControls}
                    style={{ willChange: "opacity" }}
                >
                    <path fill="none" strokeLinejoin="round" stroke="#000000" strokeLinecap="round" d="M18.74,20.4l10.85.09L30,33.91c-.92,2.15-5.08,2.46-5.71,3.43-.75-.92-4.37-1.73-5.46-3.43Z"/>
                    <path fill="none" strokeLinejoin="round" stroke="#000000" strokeLinecap="round" d="M31.39,25.63C39.81,20.79,26.59,15.22,35,10c2,3.43,2.94,8.24,8.14,7.47.54,4.78-1.05,5.63-3.1,5.65.71,2.8,1.85,3.81,3.5,4.51-.48,1.71-1.21,3.15-3.7,2.83-1.36,6.85-3.69,7.51-7.6,7,2.15-4.4-.08-6.69,2.15-9.95Z"/>
                    <path fill="none" strokeLinejoin="round" stroke="#000000" strokeLinecap="round" d="M21.1,6.12h6.12l.13,5.79,2.29,1.95c-1.42,1.67-2.6,3.55-5.05,4.37-2.73-.75-4-2.57-5.38-4.37l2.09-2Z"/>
                    <path fill="none" strokeLinejoin="round" stroke="#000000" strokeLinecap="round" d="M19.88,40.43c2.86,1.54,5.83,2.32,9.22-.06"/>
                    <path fill="none" strokeLinejoin="round" stroke="#000000" strokeLinecap="round" d="M16.61,26C8.19,21.15,21.41,15.58,13,10.39c-2,3.43-2.94,8.24-8.14,7.47-.54,4.78,1,5.62,3.1,5.65C7.29,26.3,6.15,27.32,4.5,28c.48,1.7,1.21,3.15,3.7,2.82,1.36,6.85,3.69,7.51,7.6,7-2.15-4.4.08-6.69-2.15-10Z"/>
                </motion.svg>
            </motion.div>
            <motion.div 
                className={styles.title}
                initial={{ translateX: 100, opacity: 0 }}
                animate={titleControls}
                style={{ willChange: "transform, opacity" }}
            >
                <h1>Тинькофф</h1>
                <h2>Касса</h2>
            </motion.div>
            <motion.h1
                className={styles.price}
                initial={{ scale: 0, opacity: 0 }}
                animate={priceControls}
                style={{ willChange: "transform, opacity" }}
            >
                2500₽ / мес.
            </motion.h1>
        </div>
    )
};