import { links } from "@/lib/links";
import Link from "next/link";
import Stats from "./ui/stats";

export default function DashboardStats({ userInfo }: { userInfo: any }) {

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.href + `?user=${encodeURIComponent(userInfo)}`}>
                        <div className="stats-container rounded-xl p-5 lg:p-8 h-40 lg:h-52 w-4/5 max-w-72 lg:max-w-96 m-auto border-[1px] border-blue-800 cursor-pointer hover:border-blue-400 text-blue-800 hover:text-blue-400 flex flex-col justify-between items-center">
                            <div className="flex justify-between items-center w-full text-xl lg:text-2xl">
                                {/* Icon */}
                                <div>{link.icon}</div>
                                {/* Title */}
                                <div><p>{link.name}</p></div>
                            </div>
                            {/* Stats */}
                            {link.name == "Account" || link.name == "Dashboard" || link.name == "Allies" || link.name == "Enemies" ? <></> : <Stats name={link.name} />}
                        </div>
                    </Link>
                );
            })}
        </section>
    );
}