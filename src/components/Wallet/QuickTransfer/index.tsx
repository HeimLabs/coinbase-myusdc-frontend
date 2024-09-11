import { useMemo } from "react";
import styles from "./QuickTransfer.module.scss";
import { RecentContact } from "../../../types/api.types";
import { useGetRecentContacts } from "../../../hooks/useGetRecentContacts";
import Web3Avatar from "../../Web3Avatar";

export default function QuickTransfer() {
    const { data } = useGetRecentContacts();

    const getImageFromUser = (contact: RecentContact) => {
        if (contact.destinationUser) {
            if (contact.destinationUser.imageUrl)
                return <img src={contact.destinationUser.imageUrl} alt="PFP" />
            else
                return <img src={`https://avatar.iran.liara.run/username?username=${contact.destinationUser.name.split(' ').join("+")}`} alt="PFP" />
        } else {
            return <Web3Avatar address={contact.destinationAddress} />
        }
    }

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