'use client';
import { useSearchParams } from "next/navigation";

export default function Allies() {
    const [searchParams] = useSearchParams();
    console.log(searchParams[1]);
    const user_allies = ["1", "2"];

    return (
        <div className="px-2 py-10">
            <p className="text-yellow-400 text-center text-2xl lg:text-4xl">Allies</p>
            <div className="grid grid-cols-12 gap-4 p-4 lg:p-8">
                {user_allies.map((name: string, index: number) => {
                    return (
                        <div key={index} className="border-2 border-indigo-500 col-span-12 md:col-span-6 lg:col-span-4 h-24 lg:h-32 flex justify-between items-center p-1 bg-indigo-400">
                            <div className="border-2 h-full w-[84px] lg:w-[116px] border-indigo-500">Image</div>
                            <div className="flex flex-col flex-1 justify-center items-center">
                                <p className="text-white">{name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}