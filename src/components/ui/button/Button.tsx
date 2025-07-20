"use client";

import React from 'react';
import { motion } from 'framer-motion';

import type { ButtonProps } from '../../../types';

import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    size = 'medium',
    className = '',
    disabled = false,
    type = 'button',
    borderColor = '#ffa600',
    icon,
    bg = "none",
    delay = 0,
    section = 0
}) => {
    const handleClick = () => {
        const timeout = setTimeout(() => {
            if (onClick) onClick();
            clearTimeout(timeout);
        }, 1000);
    };

    let lStyle: React.CSSProperties = { background: bg, borderColor: borderColor };

    if (size === "regular") {
        lStyle = { 
            background: bg, 
            borderColor: borderColor,
            borderWidth: 3,
            padding: 10
        };
    }

    if (section === 6) {
        lStyle = {};
    }

    return (
        <motion.button
            className={`${styles.button} ${styles[size]} ${className}`}
            onClick={handleClick}
            disabled={disabled}
            type={type}
            style={{ 
                color: borderColor,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
                boxShadow: 'inset 0 0 3px rgba(0,0,0,0.7)',
            }}
            whileTap={{
                boxShadow: 'inset 0 0 8px rgba(0,0,0,1)',
            }}
            transition={{
                boxShadow: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    duration: .7
                },
                opacity: {
                    duration: .7,
                    delay: delay
                }
            }}
        >
            {disabled && <div className={styles.disabled} />}
            <motion.div
                className={styles.layer}
                whileHover={{
                    scale: 0.97,
                    boxShadow: 'inset 0 0 5px rgba(0,0,0,1)',
                }}
                whileTap={{
                    scale: 0.9,
                    boxShadow: 'inset 0 0 12px rgba(0,0,0,1)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    duration: .7
                }}
                style={lStyle}
            >
                {text && text}
                {icon && icon}
            </motion.div>
        </motion.button>
    );
};

export default Button;
