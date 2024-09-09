import { useNavigate } from "react-router-dom";
import { myUsdcLogo, usdc01, usdc02, usdc03, usdc04 } from "../../assets";
import styles from "./Splash.module.scss";
import { useAppUser } from "../../contexts/user.context";
import { useEffect, useState } from "react";

export default function Splash() {
    const navigate = useNavigate();
    const { user, isUserLoading, clerkUser } = useAppUser();
    const [minWaitCompleted, setMinWaitCompleted] = useState(false);

    useEffect(() => {
        const MIN_WAIT_DURATION = 2000;

        const checkAndProceed = () => {
            if (minWaitCompleted && !isUserLoading && clerkUser?.isLoaded) {
                if (user) {
                    navigate('/wallet');
                } else {
                    navigate('/login');
                }
            }
        };

        const timeoutId = setTimeout(() => {
            setMinWaitCompleted(true);
            checkAndProceed();
        }, MIN_WAIT_DURATION);

        checkAndProceed();

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [user, isUserLoading, clerkUser?.isLoaded, minWaitCompleted, navigate]);

    return (
        <div className={styles.main}>
            <img className={styles.logo} src={myUsdcLogo} alt="MyUSDC" />
            <img className={`${styles.float} ${styles.usdc01}`} src={usdc01} alt="USDC" />
            <img className={`${styles.float} ${styles.usdc02}`} src={usdc02} alt="USDC" />
            <img className={`${styles.float} ${styles.usdc03}`} src={usdc03} alt="USDC" />
            <img className={`${styles.float} ${styles.usdc04}`} src={usdc04} alt="USDC" />
        </div>
    );
}