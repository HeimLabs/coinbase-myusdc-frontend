import { myUsdcLogo, usdc01, usdc02, usdc03, usdc04 } from "../../assets";
import styles from "./Splash.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { floatingAnimation, glowAnimation } from "../../utils/animations";

export default function Splash() {
    const [minWaitCompleted, setMinWaitCompleted] = useState(false);

    useEffect(() => {
        const MIN_WAIT_DURATION = 2000;

        const timeoutId = setTimeout(() => {
            setMinWaitCompleted(true);
        }, MIN_WAIT_DURATION);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return (
        <div className={`${styles.main} ${minWaitCompleted ? styles.close : ""}`}>
            <div className={`${styles.stepContainer}`}>
                <motion.img
                    animate="glow"
                    variants={glowAnimation}
                    className={styles.logo} src={myUsdcLogo} alt="MyUSDC" />
                <motion.img
                    animate="float"
                    variants={floatingAnimation}
                    className={`${styles.float} ${styles.usdc01}`} src={usdc01} alt="USDC" />
                <motion.img
                    animate="float"
                    variants={floatingAnimation}
                    className={`${styles.float} ${styles.usdc02}`} src={usdc02} alt="USDC" />
                <motion.img
                    animate="float"
                    variants={floatingAnimation}
                    className={`${styles.float} ${styles.usdc03}`} src={usdc03} alt="USDC" />
                <motion.img
                    animate="float"
                    variants={floatingAnimation}
                    className={`${styles.float} ${styles.usdc04}`} src={usdc04} alt="USDC" />
            </div>
        </div>
    );
}