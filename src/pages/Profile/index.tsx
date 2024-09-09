import { useAppUser } from "../../contexts/user.context";
import styles from "./Profile.module.scss";

export default function Profile() {
    const {signOut} = useAppUser();

    return (
        <div className={styles.main}>
            Profile Page

            <button onClick={signOut}>Sign Out</button>
        </div>
    );
}