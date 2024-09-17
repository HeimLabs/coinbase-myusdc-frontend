import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { backIcon, coinbaseLogo, myUsdcAltLogo, profileAltIcon } from "../../assets";

export default function Header() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState('wallet');

    useEffect(() => {
        if (pathname.includes("transfers"))
            setActiveTab('transfers');
        else if (pathname.includes("profile"))
            setActiveTab('profile');
        else if (pathname.includes("send"))
            setActiveTab('send');
        else
            setActiveTab('wallet');
    }, [pathname]);

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className={styles.main}>
            {
                activeTab == "wallet"
                    ? <div className={styles.walletHeader}>
                        <div className={styles.leftContainer}>
                            <img className={styles.logo} src={myUsdcAltLogo} alt="My USDC" />
                            <div className={styles.buildContainer} onClick={() => window.open("https://app.deform.cc/form/30138814-ece7-4a5d-bd30-305b4a687a6f", "__blank")}>
                                <img src={coinbaseLogo} alt="Coinbase" />
                                <span>Build with us</span>
                            </div>
                        </div>
                        <img onClick={() => navigate('/wallet/profile')} className={styles.profile} src={profileAltIcon} alt="Profile" />
                    </div>
                    : <div className={styles.crumbHeader}>
                        <img onClick={handleBack} className={styles.back} src={backIcon} alt="Back" />
                        <span>{pathname.split('/').reverse()[0]}</span>
                    </div>
            }
        </div>
    );
}