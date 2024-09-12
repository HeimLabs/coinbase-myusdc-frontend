import Card from "../../components/Wallet/Card";
import MyUsdc from "../../components/Wallet/MyUsdc";
import QuickTransfer from "../../components/Wallet/QuickTransfer";
import ExchangeRate from "../../components/Wallet/ExchangeRate";
import styles from "./Wallet.module.scss";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useAppUser } from "../../contexts/user.context";

export default function Wallet() {
    // const { hasAnimated, setHasAnimated } = useAppUser();

    // useEffect(() => {
    //     if (!hasAnimated && setHasAnimated)
    //         setHasAnimated(true);
    // }, []);


    return (
        <div className={styles.main}>
            <div className={styles.sectionContainer}>
                <h4>Your Non Digital Cash Balance</h4>
                <Card />
            </div>
            <div className={styles.sectionContainer}>
                <h4>USDC Overview</h4>
                <MyUsdc />
            </div>
            <div className={styles.sectionContainer}>
                <h4>Quick Transfer</h4>
                <QuickTransfer />
            </div>
            <div className={styles.sectionContainer}>
                <h4>Exchange Rate</h4>
                <ExchangeRate />
            </div>
        </div>
    );

    // @todo - motion div messes with modal for a few seconds before autocorrecting
    // return (
    //     <div className={styles.main}>
    //         <motion.div
    //             initial={hasAnimated ? {} : { opacity: 0, y: "-20px" }}
    //             animate={{ opacity: 1, y: "0px" }}
    //             transition={{ delay: 2, duration: 1, type: 'spring' }}
    //             className={styles.sectionContainer}
    //         >
    //             <h4>Your Non Digital Cash Balance</h4>
    //             <Card />
    //         </motion.div>
    //         <motion.div
    //             initial={hasAnimated ? {} : { opacity: 0, y: "-20px" }}
    //             animate={{ opacity: 1, y: "0px" }}
    //             transition={{ delay: 2.2, duration: 1, type: 'spring' }}
    //             className={styles.sectionContainer}
    //         >
    //             <h4>USDC Overview</h4>
    //             <MyUsdc />
    //         </motion.div>
    //         <motion.div
    //             initial={hasAnimated ? {} : { opacity: 0, y: "-20px" }}
    //             animate={{ opacity: 1, y: "0px" }}
    //             transition={{ delay: 2.4, duration: 1, type: 'spring' }}
    //             className={styles.sectionContainer}
    //         >
    //             <h4>Quick Transfer</h4>
    //             <QuickTransfer />
    //         </motion.div>
    //         <motion.div
    //             initial={hasAnimated ? {} : { opacity: 0, y: "-20px" }}
    //             animate={{ opacity: 1, y: "0px" }}
    //             transition={{ delay: 2.6, duration: 1, type: 'spring' }}
    //             className={styles.sectionContainer}
    //         >
    //             <h4>Exchange Rate</h4>
    //             <ExchangeRate />
    //         </motion.div>
    //     </div>
    // );
}