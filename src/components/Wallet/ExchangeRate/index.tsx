import {
    australiaFlag,
    australiaFlagBg,
    britainFlag,
    britainFlagBg,
    canadaFlag,
    canadaFlagBg,
    negativeArrowIcon,
    positiveArrowIcon
} from "../../../assets";
import { useGetUsdRates } from "../../../hooks/useGetUsdRates";
import styles from "./ExchangeRate.module.scss";

export default function ExchangeRate() {
    const { data } = useGetUsdRates();

    return (
        <div className={styles.main}>
            {/* CANADA */}
            <div className={`${styles.exchangeContainer}`} style={{ backgroundImage: `url(${canadaFlagBg})` }}>
                <div className={styles.countryContainer}>
                    <img src={canadaFlag} alt="Canada" />
                    <span>Canadian Dollar</span>
                </div>
                <div className={styles.rateContainer}>
                    <span className={styles.price}>
                        {data?.data.usd.cad
                            .toLocaleString(undefined, { maximumFractionDigits: 4 }) || "NA"}
                    </span>
                    <div className={`${styles.change} ${styles.changeDown}`}>
                        <span>NA%</span>
                        <img src={negativeArrowIcon} alt="Arrow Up" />
                    </div>
                </div>
            </div>
            <div className={styles.hr} />
            {/* AUSTRALIA */}
            <div className={`${styles.exchangeContainer}`} style={{ backgroundImage: `url(${australiaFlagBg})` }}>
                <div className={styles.countryContainer}>
                    <img src={australiaFlag} alt="Australia" />
                    <span>Australian Dollar</span>
                </div>
                <div className={styles.rateContainer}>
                    <span className={styles.price}>
                        {data?.data.usd.aud
                            .toLocaleString(undefined, { maximumFractionDigits: 4 }) || "NA"}
                    </span>
                    <div className={`${styles.change} ${styles.changeUp}`}>
                        <span>NA%</span>
                        <img src={positiveArrowIcon} alt="Arrow Up" />
                    </div>
                </div>
            </div>
            <div className={styles.hr} />
            {/* BRITAIN */}
            <div className={`${styles.exchangeContainer}`} style={{ backgroundImage: `url(${britainFlagBg})` }}>
                <div className={styles.countryContainer}>
                    <img src={britainFlag} alt="Britain" />
                    <span>Great British Pound</span>
                </div>
                <div className={styles.rateContainer}>
                    <span className={styles.price}>
                        {data?.data.usd.gbp
                            .toLocaleString(undefined, { maximumFractionDigits: 4 }) || "NA"}
                    </span>
                    <div className={`${styles.change} ${styles.changeUp}`}>
                        <span>NA%</span>
                        <img src={positiveArrowIcon} alt="Arrow Up" />
                    </div>
                </div>
            </div>
        </div>
    );
}