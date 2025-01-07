import { NextResponse } from "next/server";
import {
  createKingdom,
  encryptPassword,
  getAlliesByID,
  getEnemiesByID,
  getIDByEmail,
  getUserInfo,
} from "../database/route";

export class User {
  id;
  email;
  family;
  hero1;
  hero2;
  hero3;
  region;
  properties;
  population;
  civilians;
  workers;
  military;
  resources;
  allies;
  enemies;

  constructor(
    id,
    email,
    family,
    hero1,
    hero2,
    hero3,
    region,
    properties,
    population,
    civilians,
    workers,
    military,
    resources,
    allies,
    enemies
  ) {
    this.id = id;
    this.email = email;
    this.family = family;
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.hero3 = hero3;
    this.region = region;
    this.properties = properties;
    this.population = population;
    this.civilians = civilians;
    this.workers = workers;
    this.military = military;
    this.resources = resources;
    this.allies = allies;
    this.enemies = enemies;
  }
}

export async function POST(req) {
  const Formdata = await req.formData();
  const email = Formdata.get("email");
  const password = encryptPassword(Formdata.get("key"));
  const family = Formdata.get("surname");
  const hero = Formdata.get("hero1");
  const region = Formdata.get("region");

  // create a new kingdom
  await createKingdom(email, password, family, hero, region);

  // get new user's ID
  const userID = await getIDByEmail(email);

  // get new user's info from db
  const userInfo = await getUserInfo(userID);
  const userallies = await getAlliesByID(userID);
  const userEnemies = await getEnemiesByID(userID);

  // create a new user object
  const user = new User(
    userInfo.id,
    userInfo.email,
    userInfo.family,
    userInfo.hero1,
    userInfo.hero2,
    userInfo.hero3,
    userInfo.region,
    userInfo.properties,
    userInfo.population,
    userInfo.civilians,
    userInfo.workers,
    userInfo.military,
    userInfo.resources,
    userallies,
    userEnemies
  );

  // give user logged in token and redirect to dashboard

  return NextResponse.redirect(
    new URL(`/user/dashboard?user=${encodeURIComponent(user)}`, req.url)
  );
}
