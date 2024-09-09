import { SignUp } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { myUsdcLogo } from "../../assets";
import styles from "./Register.module.scss";

export default function Register() {
    return (
        <div className={styles.main}>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={myUsdcLogo} alt="MyUSDC" />
            </div>
            <SignUp
                appearance={{
                    baseTheme: dark,
                    elements: {
                        headerTitle: {
                            display: "none"
                        },
                        headerSubtitle: {
                            display: "none"
                        },
                        card: {
                            padding: "5px 40px 30px 40px",
                            background: "none",
                        },
                        footer: {
                            background: "none"
                        }
                    }
                }}
                signInUrl="/login"
            />
        </div>
    );
}