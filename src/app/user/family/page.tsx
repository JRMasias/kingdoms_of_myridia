import { getFamilyNameByID, getHero1ByID } from "@/app/api/database/route";

export default async function Family() {
    const userID = 100000;
    let familyName;
    let heroNames;
    familyName = await getFamilyNameByID(userID);
    heroNames = await getHero1ByID(userID);

    return (
        <div className="px-8 py-10">
            <p className="text-yellow-400 text-center text-2xl lg:text-4xl pb-10">Heroes</p>
            <div className="flex flex-col gap-5 justify-center items-center">
                {heroNames &&
                    <p className="text-blue-400">{heroNames["hero1"]} {familyName}</p>
                }
                {heroNames["hero2"] &&
                    <p className="text-blue-400">{heroNames["hero2"]} {familyName}</p>
                }
                {heroNames["hero3"] &&
                    <p className="text-blue-400">{heroNames["hero3"]} {familyName}</p>
                }
                {heroNames.length <= 0 ? <p className="text-white">You have no heroes</p> : <></>}
            </div>
        </div>
    );
}