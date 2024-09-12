import { amexLogo, buyIcon, qrIcon, sendIcon } from "../../../assets";
import { useAppUser } from "../../../contexts/user.context";
import styles from "./Card.module.scss";
import BuyModal from "../BuyModal";
import { useEffect, useRef, useState } from "react";
import QrModal from "../QrModal";
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

export default function Card() {
    const { user, isUserLoading, setCardBottom } = useAppUser();
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);

    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
    const [isQrModalOpen, setIsQrModalOpen] = useState(false);

    // Find bottom of card
    useEffect(() => {
        if (cardRef && cardRef.current && setCardBottom) {
            const cardRect = cardRef.current.getBoundingClientRect();
            console.log("cardRect.bottom: ", cardRect.bottom);
            setCardBottom(cardRect.bottom);
        }
    }, [cardRef, setCardBottom])


    return (
        <div ref={cardRef} className={styles.cardContainer}>
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
                    {isUserLoading
                        ? <span>$ <Skeleton /></span>
                        : <span>$ {user?.wallet.usdBalance.toLocaleString(undefined, { maximumFractionDigits: 3 })}</span>}
                    <img onClick={() => setIsQrModalOpen(true)} src={qrIcon} alt="QR" />
                </div>
            </div>
            {/* ACTIONS */}
            <div className={styles.actionContainer}>
                <button onClick={() => setIsBuyModalOpen(true)} className={styles.actionBttn}>
                    <img src={buyIcon} alt="Buy" />
                    <span>Buy USDC</span>
                </button>
                <button onClick={() => navigate('/wallet/send')} className={styles.actionBttn}>
                    <img src={sendIcon} alt="Send" />
                    <span>Send USDC</span>
                </button>
            </div>
            <BuyModal isOpen={isBuyModalOpen} setOpen={setIsBuyModalOpen} />
            <QrModal isOpen={isQrModalOpen} setOpen={setIsQrModalOpen} />
        </div>
    );
}