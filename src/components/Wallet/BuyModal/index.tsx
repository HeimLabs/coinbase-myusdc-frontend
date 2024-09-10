import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { amexLogo, radioSelectedIcon } from "../../../assets";
import styles from "./BuyModal.module.scss";
import { useFundWallet } from "../../../hooks/useFundWallet";
import { Coinbase } from "@coinbase/coinbase-sdk";

export default function BuyModal({ isOpen, setOpen }: { isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [amount, setAmount] = useState<number | undefined>();
    const { fundWallet, isPending, isSuccess } = useFundWallet(Coinbase.assets.Usdc, amount || 0);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _amount = parseFloat(e.target.value);
        setAmount(_amount);
    }

    // Close Modal on Success
    useEffect(() => {
        if (isSuccess)
            setOpen(false);
    }, [isSuccess])

    // Handle Modal Close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && !isPending) {
                setOpen(!isOpen);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, setOpen]);

    return (
        <div className={`${styles.main} ${isOpen ? styles.open : ""}`}>
            <div ref={modalRef} className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
                {/* TITLE */}
                <span className={styles.title}>Buy USDC</span>
                {/* AMOUNT INPUT */}
                <input
                    className={styles.amountInput}
                    value={amount}
                    onChange={handleAmountChange}
                    type="number"
                    placeholder="USD Amount"
                />
                <div className={styles.fadingHr} />
                {/* QUICK ADD */}
                <div className={styles.quickAddContainer}>
                    <div onClick={() => setAmount(1)} className={styles.quickOption}>$1</div>
                    <div onClick={() => setAmount(5)} className={styles.quickOption}>$5</div>
                    <div onClick={() => setAmount(10)} className={styles.quickOption}>$10</div>
                    <div onClick={() => setAmount(15)} className={styles.quickOption}>$15</div>
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
                <button className={`${isPending ? styles.loading : ""}`} onClick={() => fundWallet()} disabled={isPending}>Deposit</button>
            </div>
        </div>
    );
}