import { Dispatch, SetStateAction } from "react";
import { amexLogo, radioSelectedIcon } from "../../../assets";
import styles from "./BuyModal.module.scss";

export default function BuyModal({ isOpen, setOpen }: { isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

    return (
        <div onClick={() => setOpen(!isOpen)} className={`${styles.main} ${isOpen ? styles.open : ""}`}>
            <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
                {/* TITLE */}
                <span className={styles.title}>Buy USDC</span>
                {/* AMOUNT INPUT */}
                <input className={styles.amountInput} type="text" placeholder="USD Amount" />
                <div className={styles.fadingHr} />
                {/* QUICK ADD */}
                <div className={styles.quickAddContainer}>
                    <div className={styles.quickOption}>$10</div>
                    <div className={styles.quickOption}>$50</div>
                    <div className={styles.quickOption}>$100</div>
                    <div className={styles.quickOption}>$200</div>
                </div>
                <div className={styles.fadingHr} />
                {/* CARD SELECTION */}
                <div className={styles.cardSelectionContainer}>
                    <span>Choose Account</span>
                    <div className={styles.cardOption}>
                        <div className={styles.cardDetails}>
                            <img src={amexLogo} alt="AMEX" />
                            <span>Account **** **** **** 1123</span>
                        </div>
                        <img src={radioSelectedIcon} alt="Radio Selected" />
                    </div>
                </div>
                <div className={styles.fadingHr} />
                <button>Deposit</button>
            </div>
        </div>
    );
}