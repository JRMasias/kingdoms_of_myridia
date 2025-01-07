import { getAlliesByID, getIDByEmail, getUserInfo } from "@/app/api/database/route";

const get_user_id = await getIDByEmail('testguy@example.com');
export const user_id = get_user_id;

export const user_info = await getUserInfo(user_id);
export const user_allies = await getAlliesByID(user_id);

export const newUser = (fromServer: number) => {
    const id: number = fromServer;
    return id;
};