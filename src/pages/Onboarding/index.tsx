import { useNavigate } from "react-router-dom";
import { nextIcon, onboarding01, onboarding02, onboarding03 } from "../../assets";
import styles from "./Onboarding.module.scss";
import { useAppUser } from "../../contexts/user.context";
import { useEffect, useState } from "react";

export default function Onboarding() {
    const navigate = useNavigate();
    const { clerkUser } = useAppUser();
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (clerkUser?.isLoaded) {
            if (clerkUser.isSignedIn) {
                navigate('/wallet');
            }
        }
    }, [clerkUser, clerkUser?.isLoaded, navigate]);

    const nextStep = () => step == 2 ? navigate("/login") : setStep(step + 1);

    return (
        <div className={styles.main}>
            {/* @todo - fix stepper here */}
            {/* @todo - fix button */}
            {/* ONBOARDING-1 */}
            <div className={`${styles.stepContainer} ${styles.onboarding} ${step == 0 ? styles.active : ""}`}>
                <img className={styles.onboardingImage} src={onboarding01} alt="Onboarding Image" />
                <span className={styles.onboardingText}>
                    Connect your checking
                    or savings accounts to
                    view your cash balances.
                </span>
                <div onClick={nextStep} className={styles.actionContainer}>
                    <span>NEXT</span>
                    <img src={nextIcon} alt="Next" />
                </div>
            </div>
            {/* ONBOARDING-2 */}
            <div className={`${styles.stepContainer} ${styles.onboarding} ${step == 1 ? styles.active : ""}`}>
                <img className={styles.onboardingImage} src={onboarding02} alt="Onboarding Image" />
                <span className={styles.onboardingText}>
                    Buy USDC (USD Coin),
                    a digital version of the US
                    dollar that’s fully backed
                    1-to-1 by real US dollars.
                </span>
                <div onClick={nextStep} className={styles.actionContainer}>
                    <span>NEXT</span>
                    <img src={nextIcon} alt="Next" />
                </div>
            </div>
            {/* ONBOARDING-3 */}
            <div className={`${styles.stepContainer} ${styles.onboarding} ${step == 2 ? styles.active : ""}`}>
                <img className={styles.onboardingImage} src={onboarding03} alt="Onboarding Image" />
                <span className={styles.onboardingText}>
                    Start earning 3% APY in
                    USDC rewards, or send
                    USDC to anyone in the
                    world at zero cost.
                </span>
                <div onClick={nextStep} className={styles.actionContainer}>
                    <span>GET STARTED</span>
                    <img src={nextIcon} alt="Next" />
                </div>
            </div>
        </div>
    );
}