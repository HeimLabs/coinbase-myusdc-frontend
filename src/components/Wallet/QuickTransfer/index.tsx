import { useMemo } from "react";
import styles from "./QuickTransfer.module.scss";
import { useGetRecentContacts } from "../../../hooks/useGetRecentContacts";
import { getImageFromUser } from "../../../utils";

export default function QuickTransfer() {
    const { data } = useGetRecentContacts();

    const blanks = useMemo(() => {
        const recentContacts = data?.data?.recentContacts;
        if (recentContacts && recentContacts.length < 5) {
            const blankCount = 5 - recentContacts.length;
            return Array.from({ length: blankCount }, (_, index) => (
                <div key={index} className={styles.contactContainer}>
                    <div className={styles.blank} />
                </div>
            ));
        }
        return [];
    }, [data?.data?.recentContacts]);

    return (
        <div className={styles.main}>
            {data?.data.recentContacts.map((contact) => {
                return (
                    <div className={styles.contactContainer}>
                       {getImageFromUser(contact)}
                    </div>
                )
            })}
            {data?.data?.recentContacts?.length && data?.data?.recentContacts.length < 5 && blanks}
        </div>
    );
}