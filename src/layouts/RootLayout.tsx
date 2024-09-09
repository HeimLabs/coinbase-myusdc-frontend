import { Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { UserProvider } from '../contexts/user.context.tsx';


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
                {/* HEADER HERE */}
                {/* <header className="header">
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </header> */}
                <main>
                    <Outlet />
                </main>
                {/* BOTTOM NAV HERE */}
                {/* <SignedIn>
                <UserButton />
            </SignedIn> */}
            </UserProvider>
        </ClerkProvider>
    )
}