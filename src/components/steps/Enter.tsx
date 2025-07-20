"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Circles } from "../ui/circles/Circles";

import styles from "./Enter.module.css";

export const Enter: React.FC = () => {
    const btnControls = useAnimation();
    const circle1Controls = useAnimation();
    const circle2Controls = useAnimation();
    const iconControls = useAnimation();
    const icon2Controls = useAnimation();

    useEffect(() => {
        btnControls.start({
            scale: 1,
            opacity: [0, 1, 1, 0],
            transition: {
                scale: {
                    duration: .5,
                    type: "spring",
                    stiffness: 150,
                    damping: 10
                },
                opacity: {
                    duration: 3.2,
                    ease: "easeInOut",
                    times: [0, 0.01, 0.99, 1]
                }
            } 
        });

        circle1Controls.start({
            scale: 1, 
            opacity: [0, 1, 0],
            transition: {
                scale: {
                    duration: 1,
                    delay: 2,
                    ease: "easeInOut"
                },
                opacity: {
                    duration: 1,
                    delay: 2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                }
            }
        });

        circle2Controls.start({
            scale: 1, 
            opacity: [0, 1, 0],
            transition: {
                scale: {
                    duration: 1,
                    delay: 2.2,
                    ease: "easeInOut"
                },
                opacity: {
                    duration: 1,
                    delay: 2.2,
                    ease: "easeInOut",
                    times: [0, 0.5, 1]
                }
            }
        });

        iconControls.start({
            x: 0, 
            y: 0, 
            opacity: [0, 1, 0], 
            scale: [1, .9, 1],
            transition: {
                x: {
                    duration: .8,
                    delay: .5,
                    ease: "easeInOut"
                },
                y: {
                    duration: .8,
                    delay: .5,
                    ease: "easeInOut"
                },
                opacity: {
                    duration: 2,
                    delay: .5,
                    ease: "easeInOut",
                    times: [0, 0.7, 1]
                },
                scale: {
                    duration: .5,
                    delay: 1.3,
                    ease: "easeInOut"
                },
            }
        });

        icon2Controls.start({
            opacity: 1, 
            scale: 1,
            transition: {
                duration: .5,
                delay: 5,
                type: "spring",
                stiffness: 150,
                damping: 10
            }
        });
    }, []);

    return (
        <div className={styles.container}>
            <Circles />
            <motion.div 
                className={styles.regBtn}
                initial={{ scale: 0, opacity: 0 }}
                animate={btnControls}
                style={{ willChange: "transform, opacity" }}
            >Вход</motion.div>
            <motion.div 
                className={styles.circle} 
                initial={{ scale: 0, opacity: 0 }}
                animate={circle1Controls}
                style={{ willChange: "transform, opacity" }}
            />
            <motion.div 
                className={styles.circle} 
                initial={{ scale: 0, opacity: 0 }}
                animate={circle2Controls}
                style={{ willChange: "transform, opacity" }}
            />
            <motion.svg 
                className={styles.icon} 
                style={{ willChange: "transform, opacity" }}
                xmlns="http://www.w3.org/2000/svg" 
                fill="#FFF" 
                width="800px" 
                height="800px" 
                viewBox="0 0 50 50"
                initial={{ x: 30, y: 80, opacity: 0, scale: 1 }}
                animate={iconControls}
            >
                <path d="M33 38H21c-.6 0-1-.4-1-1 0-1.5-.7-2.4-1.8-3.8-.6-.7-1.3-1.6-2-2.7-1.9-3-3.6-6.6-4-7.9-.4-1.3-.1-2.2.3-2.7.4-.6 1.2-.9 2.1-.9 1.2 0 2.4 1 3.5 2.3V11c0-1.7 1.3-3 3-3s3 1.3 3 3v4.2c.3-.1.6-.2 1-.2 1.1 0 2 .6 2.5 1.4.4-.3.9-.4 1.4-.4 1.4 0 2.5.9 2.9 2.2.3-.1.7-.2 1.1-.2 1.7 0 3 1.3 3 3v3c0 2.6-.5 4.7-1 6.7s-1 3.9-1 6.3c0 .6-.4 1-1 1zm-11.1-2H32c.1-2.2.6-4 1-5.8.5-2 1-3.9 1-6.2v-3c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1s-1-.4-1-1v-9c0-.6-.4-1-1-1s-1 .4-1 1v15c0 .6-.4 1-1 1s-1-.4-1-1v-.8c-.9-2.3-2.8-4.2-3.5-4.2-.2 0-.4 0-.5.1-.1.1-.1.4 0 .9.3 1.1 1.8 4.3 3.8 7.5.6 1 1.2 1.7 1.8 2.5 1.1 1.2 2.1 2.3 2.3 4z"/>
            </motion.svg>
            <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="#63C5AB" 
                width="800px" 
                height="800px" 
                viewBox="0 0 50 50"
                style={{ willChange: "transform, opacity, scale" }}
                className={styles.icon2}
                initial={{ opacity: 0, scale: 0 }}
                animate={icon2Controls}
            >
                <path d="M40 23.2c0-2.1-1.7-3.2-4-3.2h-6.7c.5-1.8.7-3.5.7-5 0-5.8-1.6-7-3-7-.9 0-1.6.1-2.5.6-.3.2-.4.4-.5.7l-1 5.4c-1.1 2.8-3.8 5.3-6 7V36c.8 0 1.6.4 2.6.9 1.1.5 2.2 1.1 3.4 1.1h9.5c2 0 3.5-1.6 3.5-3 0-.3 0-.5-.1-.7 1.2-.5 2.1-1.5 2.1-2.8 0-.6-.1-1.1-.3-1.6.8-.5 1.5-1.4 1.5-2.4 0-.6-.3-1.2-.6-1.7.8-.6 1.4-1.6 1.4-2.6zm-2.1 0c0 1.3-1.3 1.4-1.5 2-.2.7.8.9.8 2.1 0 1.2-1.5 1.2-1.7 1.9-.2.8.5 1 .5 2.2v.2c-.2 1-1.7 1.1-2 1.5-.3.5 0 .7 0 1.8 0 .6-.7 1-1.5 1H23c-.8 0-1.6-.4-2.6-.9-.8-.4-1.6-.8-2.4-1V23.5c2.5-1.9 5.7-4.7 6.9-8.2v-.2l.9-5c.4-.1.7-.1 1.2-.1.2 0 1 1.2 1 5 0 1.5-.3 3.1-.8 5H27c-.6 0-1 .4-1 1s.4 1 1 1h9c1 0 1.9.5 1.9 1.2z"/><path d="M16 38h-6c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm-6-16v14h6V22h-6z"/>
            </motion.svg>
        </div>
    )
};