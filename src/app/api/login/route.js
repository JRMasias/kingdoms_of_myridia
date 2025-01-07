import { NextResponse } from "next/server";
import {
  decryptPassword,
  getAlliesByID,
  getEnemiesByID,
  getIDByEmail,
  getNumAlliesByID,
  getNumEnemiesByID,
  getPasswordByID,
  getUserInfo,
} from "../database/route";

export async function POST(req) {
  const Formdata = await req.formData();
  const email = Formdata.get("email");
  const password = Formdata.get("password");

  // query database to check if email and password are correct
  const id = await getIDByEmail(email);

  // if correct pull the password and decrypt it then check if it matches the password given
  const correctPw = await getPasswordByID(id);
  const decryptedPw = await decryptPassword(correctPw);

  if (password === decryptedPw) {
    // get user info and create user object
    const userInfo = await getUserInfo(id);
    const user_allies = await getAlliesByID(id);
    const ally_count = await getNumAlliesByID(id);
    const user_enemies = await getEnemiesByID(id);
    const enemy_count = await getNumEnemiesByID(id);

    const user = [
      userInfo.id,
      email,
      userInfo.name,
      userInfo.hero1,
      userInfo.hero2,
      userInfo.hero3,
      userInfo.region,
      userInfo.population,
      userInfo.civilians,
      userInfo.workers,
      userInfo.military,
      userInfo.wood,
      userInfo.metal,
      userInfo.oil,
      userInfo.food,
      userInfo.gold,
      ally_count,
      enemy_count,
      user_allies,
      user_enemies,
    ];

    // if correct, return a token and redirect to dashboard
    return NextResponse.redirect(
      new URL(`/user/dashboard?id=${encodeURIComponent(user)}`, req.url)
    );
  }

  // return NextResponse.redirect(new URL("/", req.url));
  return NextResponse.json({
    error: "Incorrect email or password",
  });
}
