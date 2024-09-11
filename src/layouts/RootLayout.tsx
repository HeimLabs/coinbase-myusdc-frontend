import { Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignedIn } from '@clerk/clerk-react';
import { UserProvider } from '../contexts/user.context.tsx';
import BottomNavBar from '../components/BottomNavBar';
import Header from '../components/Header';
import styles from "../styles/Layout.module.scss";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

export default function RootLayout() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
        >
            <UserProvider>
                <div className={styles.layoutContainer}>
                    {/* HEADER HERE */}
                    <SignedIn>
                        <Header />
                    </SignedIn>

                    {/* MAIN CONTENT */}
                    <main className={styles.rootLayout}>
                        <Outlet />
                    </main>

                    {/* BOTTOM NAV HERE */}
                    <SignedIn>
                        <BottomNavBar />
                    </SignedIn>
                </div>
            </UserProvider>
        </ClerkProvider>
    )
}