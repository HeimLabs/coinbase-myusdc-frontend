import Skeleton from "react-loading-skeleton";
import { useGetTransfers } from "../../hooks/useGetTransfers";
import { getImageFromUser, shortAddress } from "../../utils";
import styles from "./Transfers.module.scss";

export default function Transfers() {
    const { data, isFetching } = useGetTransfers();

    const SkeletonTransfer = () => {
        return (
            <div className={styles.transferRow}>
                <div className={styles.userDetails}>
                    <div className={styles.pfp}><Skeleton width={'40px'} height={'40px'} /></div>
                    <div className={styles.contentContainer}>
                        <span className={styles.title}><Skeleton width={'140px'} /></span>
                        <span className={styles.subtitle}><Skeleton width={'100px'} /></span>
                    </div>
                </div>
                <span className={styles.amount}><Skeleton width={'60px'} /></span>
            </div>
        )
    }

    const skeletonArray = Array.from({ length: 5 }, () => <SkeletonTransfer />);

    return (
        <div className={styles.main}>
            <div className={styles.monthContainer}>
                {isFetching
                    ? skeletonArray
                    : data?.data.transfers.map((transfer) => {
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
                    })
                }
            </div>
        </div>
    );
}