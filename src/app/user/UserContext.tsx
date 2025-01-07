import { createContext, useContext } from "react";

interface UserContextType {
    id: number,
    email: string,
    name: string,
    hero1: string,
    hero2: string,
    hero3: string,
    region: string,
    population: number,
    civilians: number,
    workers: number,
    military: number,
    wood: number,
    metal: number,
    oil: number,
    food: number,
    gold: number
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children, userInfo }: { children: React.ReactNode, userInfo: any }) => {
    return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
};

export const useUserInfo = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUserInfo must be used within a UserProvider");
    }
    return context;
}