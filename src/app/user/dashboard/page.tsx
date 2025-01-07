'use client';
import DashboardStats from "@/components/dashboard";
import { useSearchParams } from "next/navigation";
import { useUserInfo } from "../UserContext";

export default function Dashboard() {
    const [searchParams] = useSearchParams();
    const user = useUserInfo();

    return (
        <main className="max-w-[1366px] mx-auto p-5 lg:p-20">
            <div className="text-white text-center text-xl lg:text-3xl pb-6 lg:pb-20">
                <p className="">Dashboard for {user.email}</p>
                <p></p>
            </div>
            <DashboardStats userInfo={searchParams[1]} />
        </main>
    );
}