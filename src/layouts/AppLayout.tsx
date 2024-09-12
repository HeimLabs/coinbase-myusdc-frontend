import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from "../styles/Layout.module.scss";

export default function AppLayout() {
    const { userId, isLoaded } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded) {
            if (!userId) navigate('/login')
            else if (userId) navigate('/wallet')
        }
    }, [isLoaded])

    if (!isLoaded) return 'Loading...'

    return (
        <div className={styles.appLayout}>
            <Outlet />
        </div>
    )
}