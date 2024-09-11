import { useGetTransfers } from "../../hooks/useGetTransfers";
import { getImageFromUser, shortAddress } from "../../utils";
import styles from "./Transfers.module.scss";

export default function Transfers() {
    const { data } = useGetTransfers();

    return (
        <div className={styles.main}>
            <div className={styles.monthContainer}>
                {data?.data.transfers.map((transfer) => {
                    return (
                        <div className={styles.transferRow}>
                            <div className={styles.userDetails}>
                                <div className={styles.pfp}>{getImageFromUser(transfer)}</div>
                                <div className={styles.contentContainer}>
                                    {transfer.destinationUser
                                        ? <span className={styles.title}>{transfer.destinationUser.name}</span>
                                        : <span className={styles.title}>{shortAddress(transfer.destinationAddress)}</span>}
                                    {/* {transfer.destinationUser
                                        ? <span className={styles.subtitle}>{transfer.destinationUser.email}</span>
                                        : <span className={styles.subtitle}>{transfer.id}</span>} */}
                                    <span className={styles.subtitle}>Status: {transfer.status}</span>
                                </div>
                            </div>
                            <span className={styles.amount}>- {transfer.amount} USDC</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}