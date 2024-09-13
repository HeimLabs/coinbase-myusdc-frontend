import { useState } from "react";
import { infoIcon } from "../../../assets";
import { useAppUser } from "../../../contexts/user.context";
import styles from "./MyUsdc.module.scss";
import Skeleton from "react-loading-skeleton";

export default function MyUsdc() {
    const { user, isUserLoading } = useAppUser();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles.balanceContainer}>
                <span className={styles.title}>USDC Balance</span>
                {isUserLoading
                    ? <span className={styles.value}>$ <Skeleton /></span>
                    : <span className={styles.value}>
                        ${user?.wallet?.usdcBalance?.toLocaleString(undefined,
                            { maximumFractionDigits: 3, minimumFractionDigits: 2 }) || "NA"}
                    </span>}

            </div>
            <div className={styles.vr} />
            <div className={styles.balanceContainer}>
                <span className={styles.title}>Rewards</span>
                <div className={styles.rewardsContainer}>
                    {isUserLoading
                        ? <span className={styles.value}>$ <Skeleton /></span>
                        : <span className={styles.value}>
                            ${user?.wallet?.rewards?.amount?.toLocaleString(undefined,
                                { maximumFractionDigits: 3, minimumFractionDigits: 2 }) || "NA"}
                        </span>}
                    <img onClick={() => setIsOpen(true)} src={infoIcon} alt="Info" />
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
                USDC is the world's digital dollar that's fully backed 1-to-1 by
                real US dollars. Start earning 3% USDC rewards, or send
                USDC to anyone in the world at zero cost.
            </div>
        </div>
    );
}