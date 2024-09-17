import { useEffect, useState } from "react";
import QuickTransfer from "../../components/Wallet/QuickTransfer";
import styles from "./Send.module.scss";
import { useTransferAsset } from "../../hooks/useTransferAsset";
import { Coinbase } from "@coinbase/coinbase-sdk";
import { successCheckIcon } from "../../assets";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Send() {
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const [destination, setDestination] = useState<string>(params.get("dest") || "");
    const [amount, setAmount] = useState<number>(0);

    const { transferAsset, data, isPending, isSuccess, reset } = useTransferAsset(destination, Coinbase.assets.Usdc, amount);

    const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _destination = e.target.value;
        setDestination(_destination);
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const _amount = parseFloat(e.target.value);
        setAmount(_amount);
    }

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        transferAsset();
    }

    const handleBack = () => {
        reset();
        navigate("/wallet");
    }

    const handleViewTransfer = () => {
        window.open(data?.data.transactionLink, "_blank");
    }

    useEffect(() => {
        setDestination(params.get("dest") || "")
    }, [params])

    if (isSuccess)
        return (
            <div className={styles.successMain}>
                <span className={styles.title}>Congratulations!</span>
                <span className={styles.subtitle}>You’ve just taken part in the future of finance,
                    powered by CDP SDK. To learn more about USDC
                    and the technology powering this demo, check
                    out <a href="https://docs.cdp.coinbase.com/mpc-wallet/docs/welcome" target="_blank">our docs </a>
                    or <a href="https://app.deform.cc/form/30138814-ece7-4a5d-bd30-305b4a687a6f" target="_blank">contact us </a>
                    or <a href="https://discord.com/invite/cdp" target="_blank">join the CDP Discord</a>
                </span>
                <img src={successCheckIcon} alt="Success Check" />
                <span className={styles.subtitle}>Your transacton was completed successfully!</span>
                <div className={styles.actionContainer}>
                    <button onClick={handleViewTransfer} className={`${styles.bttn} ${styles.light}`}>View Transfer</button>
                    <button onClick={handleBack} className={`${styles.bttn} ${styles.dark}`}>Back to App</button>
                </div>
            </div>
        )

    else
        return (
            <form onSubmit={handleSumbit} className={styles.main}>
                <div className={styles.container}>
                    <span>Enter recipient Wallet Address or Email Address</span>
                    <input
                        type="text"
                        placeholder="Wallet Address / Email Address"
                        value={destination}
                        onChange={handleDestinationChange}
                        required
                    />
                </div>
                <div className={styles.container}>
                    <span>Recents</span>
                    <QuickTransfer />
                </div>
                <div className={styles.amountContainer}>
                    <span>Enter Amount</span>
                    <input
                        type="number"
                        placeholder="USDC Amount"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <div className={styles.fadingHr} />
                </div>
                <button
                    type="submit"
                    className={`${styles.bttn} ${styles.dark} ${isPending ? styles.loading : ""}`}
                    disabled={isPending}>
                    Send
                </button>
            </form>
        );
}