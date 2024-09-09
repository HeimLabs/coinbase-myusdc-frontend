import { createContext, useContext } from "react";
import { useGetUser } from "../hooks/useGetUser";
import { User } from "../types/api.types";
import { useAuth, useUser } from "@clerk/clerk-react";

type UserContextType = {
    user: User | undefined,
    clerkUser: ReturnType<typeof useUser> | undefined
    isUserLoading: boolean | undefined,
    signOut: (() => void) | undefined
}

const UserContext = createContext<UserContextType>({
    user: undefined,
    clerkUser: undefined,
    isUserLoading: undefined,
    signOut: undefined
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const getUser = useGetUser();
    const { signOut } = useAuth();
    const clerkUser = useUser();

    return <UserContext.Provider value={{
        user: getUser.data?.data,
        isUserLoading: getUser.isLoading || getUser.isFetching,
        clerkUser,
        signOut
    }}>
        {children}
    </UserContext.Provider>;
};

export const useAppUser = () => useContext(UserContext);