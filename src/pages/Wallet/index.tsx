import Card from "../../components/Wallet/Card";
import styles from "./Wallet.module.scss";

export default function Wallet() {
    return (
        <div className={styles.main}>
            <div className={styles.walletContainer}>
                <h4>Your Non Digital Cash Balance</h4>
                <Card />
            </div>
        </div>
    );
}