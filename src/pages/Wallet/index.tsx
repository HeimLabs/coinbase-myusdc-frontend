import Card from "../../components/Wallet/Card";
import MyUsdc from "../../components/Wallet/MyUsdc";
import styles from "./Wallet.module.scss";

// @todo - Skeleton loaders
// @todo - Number loader hook - rotate through numbers until data is fetched

export default function Wallet() {
    return (
        <div className={styles.main}>
            <div className={styles.sectionContainer}>
                <h4>Your Non Digital Cash Balance</h4>
                <Card />
            </div>
            <div className={styles.sectionContainer}>
                <h4>USDC Overview</h4>
                <MyUsdc />
            </div>
        </div>
    );
}