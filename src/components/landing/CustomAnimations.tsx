import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Landing.module.css";

export const CustomAnimations = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-100px", once: false });

    const steps = [
        { key: "moderation", title: "Модерация", text: "Ты создаёшь запрос. Мы проверяем его и ты ещё можешь правки.", color: "#f87575" },
        { key: "draft", title: "Драфт", text: "Заявка принята. Фиксируем черновик и открываем оплату.", color: "#d7bb3b" },
        { key: "development", title: "Разработка", text: "Оплата прошла — команда приступает к работе.", color: "#638cc5" },
        { key: "production", title: "Продакшн", text: "Анимация готова! Можно просмотреть и применить.", color: "#63c5ab" },
    ];

    return (
        <section className={styles.hero2} ref={ref}>
            <h1 className={styles.title}>Кастомные анимации</h1>
            <p className={styles.subtitle}>Каждый пользователь может заказать анимацию за <b>500 ₽</b>. Ниже — весь путь.</p>

            <div className={styles.timelineWrapper}>
                {steps.map((step, i) => (
                    <div key={step.key} className={styles.timelineRow}>
                        <div className={styles.circleWrapper}>
                            <motion.div
                                className={styles.timelineCircle}
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: i * 0.5, duration: 0.8 }}
                                style={{ borderColor: step.color }}
                            />
                            {i < steps.length - 1 && (
                                <motion.div
                                    className={styles.timelineLine}
                                    initial={{ height: 0 }}
                                    animate={isInView ? { height: 80 } : { height: 0 }}
                                    transition={{ delay: i * 0.5 + 0.2, duration: 0.8 }}
                                    style={{ background: step.color }}
                                />
                            )}
                        </div>

                        <motion.div
                            className={styles.timelineContent}
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: i * 0.5 + 0.3, duration: 0.8 }}
                        >
                            <h3 style={{ color: step.color }}>{step.title}</h3>
                            <p>{step.text}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};
