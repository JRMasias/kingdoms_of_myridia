import { db } from "@/lib/db";
import CryptoJS from "crypto-js";

/*
 *
 * Password Encryption
 *
 */
const KEY = "myridia";

export const encryptPassword = (password) => {
  const encryptedPassword = CryptoJS.AES.encrypt(password, KEY).toString();
  return encryptedPassword;
};

export const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, KEY);
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedPassword;
};
/*
 *
 * Queries
 *
 */
export async function createKingdom(email, password, family, hero, region) {
  try {
    await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [
      email,
      password,
    ]);

    const id = await getIDByEmail(email);

    await db.query("INSERT INTO families (id, name, hero1) VALUES (?, ?, ?)", [
      id,
      family,
      hero,
    ]);

    await db.query("INSERT INTO kingdoms (id, region) VALUES (?, ?)", [
      id,
      region,
    ]);

    await db.query("INSERT INTO properties (id) VALUES (?)", [id]);

    await db.query("INSERT INTO resources (id) VALUES (?)", [id]);

    // get other player IDs then insert into align table
    const otherUserIDs = await getOtherUserIDs(id);

    otherUserIDs.forEach(async (row) => {
      await db.query("INSERT INTO align (id, user_id) VALUES (?, ?)", [
        id,
        row.id,
      ]);
    });
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getOtherUserIDs(id) {
  try {
    const [results] = await db.query("SELECT id FROM users WHERE id != ?", [
      id,
    ]);
    return results.length > 0 ? results : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserEmailByID(id) {
  try {
    const [results] = await db.query("SELECT email FROM users WHERE id = ?", [
      id,
    ]);
    return results.length > 0 ? results[0]["email"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getEmails() {
  try {
    const [results] = await db.query("SELECT email FROM users");
    return results.length > 0 ? results : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getPasswordByID(id) {
  try {
    const [results] = await db.query(
      "SELECT password FROM users WHERE id = ?",
      [id]
    );
    return results.length > 0 ? results[0]["password"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getPopulationByID(id) {
  try {
    const [results] = await db.query(
      "SELECT population FROM kingdoms WHERE id = ?",
      [id]
    );
    return results.length > 0 ? results[0]["population"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getCiviliansByID(id) {
  try {
    const [results] = await db.query(
      "SELECT civilians FROM kingdoms WHERE id = ?",
      [id]
    );
    return results.length > 0 ? results[0]["civilians"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getWorkersByID(id) {
  try {
    const [results] = await db.query(
      "SELECT workers FROM kingdoms WHERE id = ?",
      [id]
    );
    return results.length > 0 ? results[0]["workers"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getMilitaryByID(id) {
  try {
    const [results] = await db.query(
      "SELECT military FROM kingdoms WHERE id = ?",
      [id]
    );
    return results.length > 0 ? results[0]["military"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getAlliesByID(id) {
  try {
    const [results] = await db.query(
      "SELECT user_id FROM align WHERE id = ? AND alignment = 0",
      [id]
    );

    const resultArr = await Promise.all(
      results.map(async (row) => {
        const allyName = await getFamilyNameByID(row.user_id);
        return allyName;
      })
    );

    console.log("in getAlliesByID:", resultArr);
    return resultArr;
  } catch (err) {
    console.log(err);
  }
}

export async function getNumAlliesByID(id) {
  try {
    const [results] = await db.query(
      "SELECT COUNT(user_id) FROM align WHERE id = ? AND alignment = 0",
      [id]
    );
    console.log("in getNumAlliesByID:", results);
    return results.length > 0 ? results[0]["COUNT(user_id)"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getNumEnemiesByID(id) {
  try {
    const [results] = await db.query(
      "SELECT COUNT(user_id) FROM align WHERE id = ? AND alignment = 1",
      [id]
    );
    return results.length > 0 ? results[0]["COUNT(user_id)"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getEnemiesByID(id) {
  try {
    const [results] = await db.query(
      "SELECT user_id FROM align WHERE id = ? AND alignment = 1",
      [id]
    );

    const resultArr = await Promise.all(
      results.map(async (row) => {
        const enemyName = await getFamilyNameByID(row.user_id);
        return enemyName;
      })
    );

    return resultArr;
  } catch (err) {
    console.log(err);
  }
}

export async function getFamilyNameByID(id) {
  try {
    const [results] = await db.query("SELECT name FROM families WHERE id = ?", [
      id,
    ]);

    return results.length > 0 ? results[0]["name"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getHero1ByID(id) {
  try {
    const [hero1] = await db.query("SELECT * FROM families WHERE id = ?", [id]);

    return hero1.length > 0 ? hero1[0] : "";
  } catch (err) {
    console.log(err);
  }
}

export async function getIDByEmail(email) {
  try {
    const [user_email] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );
    return user_email.length > 0 ? user_email[0]["id"] : null;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getUserInfo(id) {
  try {
    const [user] = await db.query(
      "SELECT users.created_at, users.updated_at, users.probationary_period, users.is_active, families.*, kingdoms.*, properties.*, resources.* FROM users LEFT JOIN families ON users.id = families.id LEFT JOIN kingdoms ON users.id = kingdoms.id LEFT JOIN properties ON users.id = properties.id LEFT JOIN resources ON users.id = resources.id WHERE users.id = ?",
      [id]
    );
    return user.length > 0 ? user[0] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllUsersInfo() {
  try {
    const [users] = await db.query(
      "SELECT  users.id, users.email, users.created_at, users.updated_at, users.probationary_period, users.is_active, align.*, families.*, kingdoms.*, properties.*, resources.* FROM users LEFT JOIN align ON users.id = align.id LEFT JOIN families ON users.id = families.id LEFT JOIN kingdoms ON users.id = kingdoms.id LEFT JOIN properties ON users.id = properties.id LEFT JOIN resources ON users.id = resources.id"
    );

    return users.length > 0 ? users[0] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function getWoodCount(id) {
  try {
    const [results] = await db.query(
      "SELECT wood FROM resources WHERE id = ?",
      [id]
    );
    return results.length > 0 ? results[0]["wood"] : null;
  } catch (err) {
    console.log(err);
  }
}

export async function updateWoodCount(id, amount) {
  try {
    await db.query("UPDATE resources SET wood = ? WHERE id = ?", [amount, id]);
  } catch (err) {
    console.log(err);
  }
}
