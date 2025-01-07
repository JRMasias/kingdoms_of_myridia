'use client';
import Userbar from "@/components/ui/userbar";
import { useSearchParams } from "next/navigation";
import { UserProvider } from "./UserContext";

export default function UserLayout({ children }: { children: React.ReactNode }) {
    const [searchParams] = useSearchParams();
    const searchParamsSplit = searchParams[1].split(",");
    let allies = [];
    let enemies = [];

    for (let i = 0; i < parseInt(searchParamsSplit[16]); i++) {
        allies.push(searchParamsSplit[18 + i]);
    }

    for (let i = 0; i < parseInt(searchParamsSplit[17]); i++) {
        // enemies.push(searchParamsSplit[19 + parseInt(searchParamsSplit[16]) + i]);
    }

    const userInfo = {
        id: searchParamsSplit[0],
        email: searchParamsSplit[1],
        name: searchParamsSplit[2],
        hero1: searchParamsSplit[3],
        hero2: searchParamsSplit[4],
        hero3: searchParamsSplit[5],
        region: searchParamsSplit[6],
        population: searchParamsSplit[7],
        civilians: searchParamsSplit[8],
        workers: searchParamsSplit[9],
        military: searchParamsSplit[10],
        wood: searchParamsSplit[11],
        metal: searchParamsSplit[12],
        oil: searchParamsSplit[13],
        food: searchParamsSplit[14],
        gold: searchParamsSplit[15]
    }

    return (
        <>
            <UserProvider userInfo={userInfo}>
                <Userbar userInfo={searchParamsSplit} />
                {/* <UserWoodUpdater/> */}
                <div className="mt-12 md:mt-0 md:ms-12 text-white">
                    {children}
                </div>
            </UserProvider>
        </>
    )
}