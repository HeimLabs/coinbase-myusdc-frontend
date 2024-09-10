import { amexLogo, buyIcon, qrIcon, sendIcon } from "../../../assets";
import { useAppUser } from "../../../contexts/user.context";
import styles from "./Card.module.scss";
import BuyModal from "../BuyModal";
import { useState } from "react";

export default function Card() {
    const { user } = useAppUser();

    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);


    return (
        <div className={styles.cardContainer}>
            {/* CARD */}
            <div className={styles.card}>
                <div className={`${styles.cardRow} ${styles.topRow}`}>
                    <div className={styles.cardInfo}>
                        <span>American Express Card</span>
                        <span>1234 5678 9101 1123</span>
                    </div>
                    <img src={amexLogo} alt="AMEX" />
                </div>
                <div className={`${styles.cardRow} ${styles.bottomRow}`}>
                    <span>${user?.wallet.usdBalance.toLocaleString(undefined, { maximumFractionDigits: 3 })}</span>
                    <img src={qrIcon} alt="QR" />
                </div>
            </div>
            {/* ACTIONS */}
            <div className={styles.actionContainer}>
                <button onClick={() => setIsBuyModalOpen(true)} className={styles.actionBttn}>
                    <img src={buyIcon} alt="Buy" />
                    <span>Buy USDC</span>
                </button>
                <button className={styles.actionBttn}>
                    <img src={sendIcon} alt="Send" />
                    <span>Send USDC</span>
                </button>
            </div>
            <BuyModal isOpen={isBuyModalOpen} setOpen={setIsBuyModalOpen} />
        </div>
    );
}