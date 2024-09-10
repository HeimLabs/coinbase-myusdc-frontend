import { Dispatch, SetStateAction } from "react";
import { copyIcon } from "../../../assets";
import styles from "./QrModal.module.scss";
import Modal from "../Modal";
import { QRCodeSVG } from 'qrcode.react';
import { useAppUser } from "../../../contexts/user.context";
import { toast } from "react-toastify";

export default function QrModal({ isOpen, setOpen }: { isOpen: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    const { user } = useAppUser();

    const handleCopy = async () => {
        if (user?.wallet.address) {
            await navigator.clipboard.writeText(user?.wallet.address);
            toast.success("Address copied to clipboard!");
        }
    }

    return (
        <Modal isOpen={isOpen} setOpen={setOpen}>
            <div className={styles.main}>
                {/* TITLE */}
                <span className={styles.title}>Receive USDC</span>
                {/* SUBTITLE */}
                <span className={styles.subtitle}>Scan to send USDC on Base Sepolia</span>
                {/* QR CODE */}
                <QRCodeSVG size={150} value={`ethereum:${user?.wallet.address}@84532?token=USDC`} />
                {/* ADDRESS */}
                <div className={styles.addressContainer}>
                    <span className={styles.subtitle}>Your Address: {`${user?.wallet.address.slice(0, 5)}....${user?.wallet.address.slice(-4)}`}</span>
                    <img onClick={handleCopy} src={copyIcon} alt="Copy" />
                </div>
            </div>
        </Modal>
    );
}