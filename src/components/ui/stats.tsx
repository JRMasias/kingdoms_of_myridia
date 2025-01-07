/*
  0    userInfo.id,
  1    email,
  2    userInfo.name,
  3    userInfo.hero1,
  4    userInfo.hero2,
  5    userInfo.hero3,
  6    userInfo.region,
  7    userInfo.population,
  8    userInfo.civilians,
  9    userInfo.workers,
  10    userInfo.military,
  11   userInfo.wood,
  12   userInfo.metal,
  13   userInfo.oil,
  14   userInfo.food,
  15   userInfo.gold,
*/
import { useUserInfo } from "@/app/user/UserContext";

export default function Stats({ name }: { name: string }) {
    const userInfo = useUserInfo();

    const family = (<p className="text-center">Family Name: <br /><span className="stats-green">{userInfo.name}</span></p>);
    const population =
        (<div className="text-sm flex flex-wrap justify-between gap-2 pt-1">
            <p>Total: <span className="stats-green">{userInfo.population}</span></p>
            <p>Civilians: <span className="stats-green">{userInfo.civilians}</span></p>
            <p>Workers: <span className="stats-green">{userInfo.workers}</span></p>
            <p>Military: <span className="stats-green">{userInfo.military}</span></p>
        </div>);
    const resources =
        (<div className="text-sm flex flex-wrap gap-2 pt-1">
            <p>Wood: <span className="stats-green">{userInfo.wood}</span></p>
            <div className="flex justify-between items-center w-full">
                <p>Metal: <span className="stats-green">{userInfo.metal}</span></p>
                <p>Oil: <span className="stats-green">{userInfo.oil}</span></p>
            </div>
            <div className="flex justify-between items-center w-full">
                <p>Food: <span className="stats-green">{userInfo.food}</span></p>
                <p>Gold: <span className="stats-green">{userInfo.gold}</span></p>
            </div>
        </div>);

    return (
        <section>
            {name == "Family" && family}
            {name == "Population" && population}
            {name == "Resources" && resources}
        </section>
    );
}