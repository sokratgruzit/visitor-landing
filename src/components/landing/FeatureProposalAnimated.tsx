import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Landing.module.css";

export const FeatureProposalsAnimated = () => {
  const ref = useRef<HTMLDivElement>(null);
  // useInView без once — каждый раз при входе в видимую область
  const isInView = useInView(ref, { margin: "-100px", once: false });

  const steps = [
    { key: "pending", title: "Черновик", text: "Пользователь размещает предложение.", color: "#d7bb3b" },
    { key: "voting", title: "Голосование", text: "Открывается голосование. 1 голос = 1 ₽.", color: "#638cc5" },
    { key: "development", title: "Разработка", text: "Набрав нужное количество голосов, берём в разработку.", color: "#f87575" },
    { key: "production", title: "Продакшн", text: "Функция готова! Появляется в приложении.", color: "#63c5ab" },
  ];

  return (
    <section style={{ background: "none" }} className={styles.hero2} ref={ref}>
      <h1 style={{ textAlign: "start" }} className={styles.title}>Предложения и новые функции</h1>
      <p style={{ textAlign: "start" }} className={styles.subtitle}>От идеи до продакшна — каждый шаг виден и анимирован.</p>

      <div className={styles.horizontalTimeline}>
        {steps.map((step, i) => (
          <motion.div
            key={step.key}
            className={styles.timelineCard}
            initial={{ x: -50, opacity: 0, rotate: -10 }}
            animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : { x: -50, opacity: 0, rotate: -10 }}
            transition={{ delay: i * 0.4, duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <motion.div
              className={styles.stepNumber}
              style={{ background: step.color }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1, rotate: [0, 15, 0] } : { scale: 0 }}
              transition={{ delay: i * 0.4 + 0.1, duration: 0.6 }}
            >
              {i + 1}
            </motion.div>
            <div className={styles.stepContent}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.4 + 0.2 }}
                style={{ color: step.color }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: i * 0.4 + 0.4 }}
              >
                {step.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
