import { getPopulationByID, getCiviliansByID, getWorkersByID, getMilitaryByID } from "@/app/api/database/route";

export default async function Civilians() {
    const userID = 100000;
    let population;
    let civilians;
    let workers;
    let military;

    try {
        population = await getPopulationByID(userID);
        civilians = await getCiviliansByID(userID);
        workers = await getWorkersByID(userID);
        military = await getMilitaryByID(userID);
    } finally {

        return (
            <div className="px-8 py-10">
                <p className="text-yellow-400 text-center text-2xl lg:text-4xl pb-10">Population</p>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center">
                        <p>Total Population</p>
                        <p className="text-blue-400">{population}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p>Civilians</p>
                        <p className="text-blue-400">{civilians}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p>Workers</p>
                        <p className="text-blue-400">{workers}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <p>Military</p>
                        <p className="text-blue-400">{military}</p>
                    </div>
                </div>
            </div>
        );
    }
}