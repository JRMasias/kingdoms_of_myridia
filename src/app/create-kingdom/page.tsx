'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function CreateKingdom() {
    const [region, setRegion] = useState("");
    const [searchParams] = useSearchParams();

    const prevUserInfo = [searchParams[1].split(',')];
    const email = prevUserInfo[0][0];
    const key = prevUserInfo[0][1];

    function getRegionInfo() {
        switch (region) {
            case "north":
                return "North region";
            case "south":
                return "South region";
            case "east":
                return "East region";
            case "west":
                return "West region";
            default:
                return "North Region";
        }
    }

    return (
        <form action="/api/createkingdom" method="post">
            <p className="pt-10 xl:pt-14 2xl:pt-24 text-center text-yellow-500 text-3xl xl:text-4xl 2xl:text-6xl">Create Your Kingdom</p>
            <section className="py-8 xl:py-14 text-blue-400 text-lg md:text-xl xl:text-2xl 2xl:text-3xl w-4/5 md:max-w-96 2xl:max-w-[486px] m-auto">
                {/* Hidden inputs to pass the email and password variables */}
                <input type="hidden" name="email" value={email} />
                <input type="hidden" name="key" value={key} />
                <div className="pt-0">
                    <label className="text-left px-2" htmlFor="surname">Surname</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl text-black" type="text" autoComplete="off" placeholder="Frostbeard" id="surname" name='surname' required={true} />
                </div>
                <div className="pt-4">
                    <label className="text-left px-2" htmlFor="hero1">Staring Hero First Name</label>
                    <input className="px-2 xl:px-4 py-1 xl:py-2 2xl:py-4 my-1 rounded-sm w-full text-sm xl:text-xl text-black" type="text" autoComplete="off" placeholder="Johnthor" id="hero1" name='hero1' />
                </div>
                <div className="pt-4">
                    <div className="flex flex-col">
                        <label className="text-left px-2" htmlFor="region">Starting Region</label>
                        <select className="bg-transparent border-[1px] rounded-md p-2 text-blue-600 text-base" id="region" name="region" autoComplete="off" required={true} onChange={e => setRegion(e.target.value)} defaultValue={"north"}>
                            <option value="north">North</option>
                            <option value="south">South</option>
                            <option value="east">East</option>
                            <option value="west">West</option>
                        </select>
                    </div>

                    <div className="text-sm py-4 text-red-200">
                        <p>{getRegionInfo()}</p>
                    </div>
                </div>
                <div className="w-2/5 m-auto mt-5 flex items-center justify-center">
                    <Button variant="default" type="submit" className="md:py-5 xl:py-7 xl:text-xl 2xl:text-2xl border-2 border-blue-400 text-blue-500 hover:border-blue-800 hover:bg-blue-500 hover:text-white">Create Kingdom</Button>
                </div>
            </section>
        </form>
    );
}