import { qrIcon, walletIcon } from "../../assets";
import { useAppUser } from "../../contexts/user.context";
import { shortAddress } from "../../utils";
import styles from "./Profile.module.scss";

export default function Profile() {
    const { user, signOut } = useAppUser();

    return (
        <div className={styles.main}>
            {/* USER DETAILS */}
            <div className={styles.userContainer}>
                <div className={styles.userDetails}>
                    <span className={styles.title}>{user?.name}</span>
                    <span className={styles.subtitle}>{user?.email}</span>
                    <span className={styles.subtitle}>{shortAddress(user?.wallet.address)}</span>
                </div>
                <div className={styles.pfpContainer}>
                    <img className={styles.pfp} src={user?.imageUrl} alt="PFP" />
                    <img className={styles.qr} src={qrIcon} alt="QR" />
                </div>
            </div>
            {/* ACTIONS */}
            <div className={styles.actionContainer}>
                <div className={styles.actionRow}>
                    <div className={styles.details}>
                        <img src={walletIcon} alt="Wallet" />
                        <div className={styles.content}>
                            <span className={styles.balance}>${user?.wallet.usdcBalance}</span>
                            <span className={styles.subtitle}>USDC Balance</span>
                        </div>
                    </div>
                    <div className={styles.action}>
                        <button className={`${styles.bttn} ${styles.dark}`}>
                            Buy USDC
                        </button>
                    </div>
                </div>
            </div>
            <button className={`${styles.bttn} ${styles.light}`} onClick={signOut}>Sign Out</button>
            <div className={styles.appDetails}>
                <span className={styles.title}>MY USDC APP</span>
                <span className={styles.subtitle}>Version 1.1.0</span>
            </div>
        </div>
    );
}