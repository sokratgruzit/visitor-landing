"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import Button from "../ui/button/Button";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Buy } from "../steps/Buy";
import { Enter } from "../steps/Enter";
import { Subscription } from "../steps/Subscription";

import styles from "./Landing.module.css";

export const Landing: React.FC = () => {
    const [step, setStep] = useState<number>(0);

    const titles: string[] = [
        "Начать",
        "1. Регистрация",
        "2. Оплата подписки",
        "3. Вход",
        "4. Конструктор",
        "5. Получение ссылки"
    ];

    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <section id="about" className={styles.hero}>
                    <motion.h1 
                        className={`${styles.title} texturedType`}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        style={{ textAlign: "start", willChange: "transform, opacity" }}
                    >Создай сайт-визитку или презентацию за 5 минут</motion.h1>
                    <motion.p 
                        className={`${styles.subtitle} texturedType`}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: .3,
                            ease: "easeInOut"
                        }}
                        style={{ textAlign: "start", willChange: "transform, opacity" }}
                    >Конструктор, с которым справится каждый</motion.p>
                    <div className={styles.cards}>
                        <motion.div
                            initial={{ translateY: -50, translateX: -50, opacity: 0 }}
                            whileInView={{ translateY: 0, translateX: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: .6,
                                ease: "easeInOut"
                            }}
                            style={{ textAlign: "start", willChange: "transform, opacity" }}
                            className={`${styles.card} ${styles.card1}`}
                        />
                        <motion.div
                            initial={{ translateY: -50, translateX: -50, opacity: 0 }}
                            whileInView={{ translateY: 0, translateX: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: .9,
                                ease: "easeInOut"
                            }}
                            style={{ textAlign: "start", willChange: "transform, opacity" }}
                            className={styles.card} 
                        />
                        <motion.div
                            initial={{ translateY: -50, translateX: -50, opacity: 0 }}
                            whileInView={{ translateY: 0, translateX: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1.2,
                                ease: "easeInOut"
                            }}
                            style={{ textAlign: "start", willChange: "transform, opacity" }}
                            className={`${styles.card} ${styles.card2}`}
                        />
                    </div>
                </section>
                <section id="how" style={{ background: "rgba(255, 255, 255, .05)"}} className={styles.hero}>
                    <motion.h1 
                        className={`${styles.title} texturedType`}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        style={{ textAlign: "start", willChange: "transform, opacity" }}
                    >Как это работает</motion.h1>
                    <div className={styles.steps}>
                        {step === 0 && <motion.div 
                            key={0} 
                            className={styles.pointerCircle}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: [1, .9, 1]}}
                            transition={{
                                opacity: {
                                    duration: 1,
                                    ease: "easeInOut"
                                },
                                scale: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    repeatType: "mirror",
                                    repeat: Infinity
                                }
                            }}
                        />}
                        {step === 1 && <Buy key={1} />}
                        {step === 2 && <Subscription key={2} />}
                        {step === 3 && <Enter key={3} />}
                        <Button
                            className="responsiveLeft"
                            onClick={() => step > 0 ? setStep(step - 1) : null}
                            size="small"
                            borderColor="#FFF"
                            icon={<img src="/images/arrow.svg" alt="arrow" style={{ transform: "rotate(90deg)"}} className={styles.icon} />}
                            bg="#000"
                            disabled={step === 0}
                            section={step}
                        />
                        <div className={styles.stepTitle}>{titles[step]}</div>
                        <Button
                            className="responsiveRight"
                            onClick={() => step < 5 ? setStep(step + 1) : null}
                            size="small"
                            borderColor="#FFF"
                            icon={<img src="/images/arrow.svg" alt="arrow" style={{ transform: "rotate(-90deg)"}} className={styles.icon} />}
                            bg="#000"
                            disabled={step === 5}
                            section={step}
                        />
                    </div>
                </section>
                <section id="demo" className={styles.hero}>
                    <motion.h1 
                        className={`${styles.title} texturedType`}
                        initial={{ translateY: -50, opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        style={{ textAlign: "start", willChange: "transform, opacity" }}
                    >Посмотри Демо</motion.h1>
                    <Button
                        text="Демо"
                        onClick={() => {
                            const url = process.env.NEXT_PUBLIC_APP_URL;

                            if (url) {
                                window.location.href = `${url}/demo`;
                            }
                        }}
                        size={"large"}
                        borderColor="#EF9F64"
                        delay={1}
                        bg="#000"
                        className="demoBtn"
                    />
                </section>
                <Footer />
            </main>
        </div>
    )
};