import { getEnemiesByID } from "@/app/api/database/route";

export default async function Enemies() {
    const userID = 100000;
    let enemyNames: string[];

    enemyNames = await getEnemiesByID(userID);

    return (
        <div className="px-2 py-10">
            <p className="text-yellow-400 text-center text-2xl lg:text-4xl">Enemies</p>
            {enemyNames.length > 0 ?
                <div className="grid grid-cols-12 gap-4 p-4 lg:p-8">
                    {enemyNames.map((name, index) => {
                        return (
                            <div key={index} className="border-2 border-red-500 col-span-12 md:col-span-6 lg:col-span-4 h-24 lg:h-32 flex justify-between items-center p-1 bg-red-400">
                                <div className="border-2 h-full w-[84px] lg:w-[116px] border-red-500">Image</div>
                                <div className="flex flex-col flex-1 justify-center items-center">
                                    <p className="text-white">{name}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                :
                <p className="text-red-500 text-center pt-10">You do not have any enemies, yet.</p>
            }
        </div>
    );
}