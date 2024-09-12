import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { backIcon, myUsdcAltLogo, profileAltIcon } from "../../assets";

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
                        <img className={styles.logo} src={myUsdcAltLogo} alt="My USDC" />
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