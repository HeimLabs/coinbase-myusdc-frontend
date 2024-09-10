import { useLocation, useNavigate } from "react-router-dom";
import styles from "./BottomNavBar.module.scss";
import { useEffect, useState } from "react";
import { historyActiveIcon, historyIcon, profileActiveIcon, profileIcon, walletActiveIcon, walletIcon } from "../../assets";

export default function BottomNavBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState('wallet');

    useEffect(() => {
        if (pathname.includes("transfers"))
            setActiveTab('transfers');
        else if (pathname.includes("profile"))
            setActiveTab('profile');
        else
            setActiveTab('wallet');
    }, [pathname]);

    const handleTabChange = (tab: string) => {
        navigate("/wallet/" + tab);
    }

    return (
        <div className={styles.main}>
            <div className={styles.fadingHr} />
            <div className={styles.tabContainer}>
                {/* HISTORY */}
                <div onClick={() => handleTabChange("transfers")} className={`${styles.tab} ${activeTab == "transfers" ? styles.active : ""}`}>
                    <img src={activeTab == "transfers" ? historyActiveIcon : historyIcon} alt="History" />
                    <span>Transfers</span>
                </div>
                {/* WALLET */}
                <div onClick={() => handleTabChange("")} className={`${styles.tab} ${activeTab == "wallet" ? styles.active : ""}`}>
                    <img src={activeTab == "wallet" ? walletActiveIcon : walletIcon} alt="Wallet" />
                    <span>Wallet</span>
                </div>
                {/* Profile */}
                <div onClick={() => handleTabChange("profile")} className={`${styles.tab} ${activeTab == "profile" ? styles.active : ""}`}>
                    <img src={activeTab == "profile" ? profileActiveIcon : profileIcon} alt="Profile" />
                    <span>Profile</span>
                </div>
            </div>
        </div>
    );
}