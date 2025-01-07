"use client";

import { old_english2 } from "@/app/page";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/lib/links";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Userbar({ userInfo }: { userInfo: any }) {
    const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        function handleScreenWidth() {
            setScreenWidth(window.innerWidth);
        }

        handleScreenWidth();

        window.addEventListener("resize", handleScreenWidth);
        return () => window.removeEventListener("resize", handleScreenWidth);
    }, []);

    return (
        <div className="absolute top-0 right-0 md:left-0 px-2 md:w-12 rounded-sm flex justify-end items-center md:items-start bg-purple-400">
            <Sheet>
                {/* FA BARS */}
                <SheetTrigger asChild>
                    <div className="w-8 h-10 p-1 flex flex-col justify-evenly items-center cursor-pointer">
                        <div className="w-full h-1 bg-black rounded-lg" />
                        <div className="w-full h-1 bg-black rounded-lg" />
                        <div className="w-full h-1 bg-black rounded-lg" />
                    </div>
                </SheetTrigger>
                {screenWidth < 768 ?
                    <SheetContent side="top" className="flex flex-col border-b-0 justify-center items-center bg-purple-950">
                        <SheetDescription></SheetDescription>
                        <SheetHeader>
                            <SheetTitle className={`${old_english2.className} text-yellow-400 text-2xl`}>Kingdoms of <br />Myridia</SheetTitle>
                            <Link className="flex justify-end items-center gap-3 text-white" href="/">
                                <LogOut />
                                <p>Log Out</p>
                            </Link>
                        </SheetHeader>
                        <div className="grid grid-cols-3 gap-4 text-xs md:text-sm">
                            {links.map((link, index) => {
                                return (
                                    <SheetClose asChild key={index}>
                                        <Link href={link.href + `?user=${encodeURIComponent(userInfo)}`} className="w-[88px] rounded-lg border-2 border-purple-700 text-purple-700 h-[88px] flex flex-col justify-evenly items-center hover:text-purple-400 hover:border-purple-400">
                                            {link.icon}
                                            <p>{link.name}</p>
                                        </Link>
                                    </SheetClose>

                                );
                            })}
                        </div>
                    </SheetContent>
                    :
                    <SheetContent side="left" className="flex flex-col border-r-0 bg-purple-950">
                        <SheetDescription></SheetDescription>
                        <SheetHeader>
                            <SheetTitle className={`${old_english2.className} text-yellow-400 text-3xl text-center`}>Kingdoms of <br />Myridia</SheetTitle>
                            <SheetClose asChild>
                                <Link className="flex justify-end items-center gap-3 text-white hover:text-destructive" href="/">
                                    <LogOut />
                                    <p>Log Out</p>
                                </Link>
                            </SheetClose>
                        </SheetHeader>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                            {links.map((link, index) => {
                                return (
                                    <SheetClose asChild key={index}>
                                        <Link href={link.href + `?user=${encodeURIComponent(userInfo)}`} className="w-[100px] rounded-lg border-2 border-purple-700 text-purple-700 h-[100px] flex flex-col justify-evenly items-center shadow-sm hover:border-purple-400 hover:text-purple-400 hover:shadow-lg">
                                            {link.icon}
                                            <p>{link.name}</p>
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </div>
                    </SheetContent>

                }
            </Sheet>
        </div>
    );
}