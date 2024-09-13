import { useMemo } from "react";
import styles from "./QuickTransfer.module.scss";
import { useGetRecentContacts } from "../../../hooks/useGetRecentContacts";
import { getImageFromUser } from "../../../utils";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function QuickTransfer() {
    const navigate = useNavigate();
    const { data, isFetching } = useGetRecentContacts();

    const blanks = useMemo(() => {
        const recentContacts = data?.data?.recentContacts;
        const blankCount = recentContacts == undefined ? 5 : 5 - (recentContacts?.length || 0);
        return Array.from({ length: blankCount }, (_, index) => (
            <div key={index} className={styles.contactContainer}>
                {isFetching
                    ? <Skeleton width={'80px'} height={'80px'} />
                    : <div className={styles.blank} />
                }
            </div>
        ));
    }, [data?.data, isFetching]);

    return (
        <div className={styles.main}>
            {data?.data.recentContacts.map((contact, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => {
                            const searchParams = new URLSearchParams();
                            searchParams.append("dest",
                                contact.destinationUser?.email
                                    ? contact.destinationUser.email
                                    : contact.destinationAddress
                            );
                            navigate({ pathname: `/wallet/send`, search: searchParams.toString() });
                        }}
                        className={styles.contactContainer}>
                        {getImageFromUser(contact)}
                    </div>
                )
            })}
            {blanks}
        </div>
    );
}