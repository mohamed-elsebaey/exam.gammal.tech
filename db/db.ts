"use server";
import bcrypt from "bcrypt";

// step 1#

import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const pool = mysql.createPool({
  // your MySQL host
  host: process.env.DB_HOST,
  // your MySQL username
  user: process.env.DB_USER,
  // your MySQL password
  password: process.env.DB_PASSWORD,
  // your MySQL database name
  database: process.env.DB_DATABASE,

  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "finalexam_data",
});

// step 2#

function executeQuery<T>(query: string, values?: any[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results as T[]);
      }
    });
  });
}

// step 3#

// ----------------------------- Provider Auth Like Google  -----------------------------

export async function userCredentials(
  email: string,
  name?: string,
  image?: string
) {
  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  let user: any = existingUser[0];

  if (user && (user.name != name || user.image_url != image)) {
    // user.name = name;
    // user.image_url = image;
    // const updateUserNameAndImage = await executeQuery(
    //   "UPDATE users SET name=?, image_url=?, latest_update =CURRENT_TIMESTAMP WHERE email=? ",
    //   [name, image, email]
    // );
    return { user: user };
  }

  if (!user) {
    const verificationCode = Math.floor(Math.random() * 1000000);
    const randomPassword = Math.floor(Math.random() * 100000000000000);

    const hashedPassword = await bcrypt.hash(`${randomPassword}`, 10);
    const verified = 1;
    const userData: any = await executeQuery(
      "INSERT INTO users (name, email, password, verified, verCode, image_url) VALUES (?, ?, ?, ?, ?, ?) RETURNING id,phone,role,country,state",
      [name, email, hashedPassword, verified, verificationCode, image]
    );
    const userId = userData[0].id;
    await executeQuery("INSERT INTO core_exams(user_id, email) VALUES (?,?)", [
      userId,
      email,
    ]);
    await executeQuery("INSERT INTO users_exams(user_id, email) VALUES (?,?)", [
      userId,
      email,
    ]);
    await executeQuery("INSERT INTO users_questions(user_id, email) VALUES (?,?)", [
      userId,
      email,
    ]);

    const user = {
      id: userId,
      name: name,
      email: email,
      phone: userData[0].phone,
      role: userData[0].role,
      profilePath: image,
      verified: 1,
      country: userData[0].country,
      state: userData[0].state,
    };
    // i will use userData in Session
    return { user: user };
  }
  return { user: user };
}

// ----------------------------- *************************  -----------------------------

// --------------------------------------------------------------

export async function addNewUser(
  email: string,
  password: string,
  verCode: Number
) {
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }

  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return { errors: { email: "* Email already exists" } };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await executeQuery(
    "INSERT INTO users (email, password, verCode) VALUES (?, ?,?)",
    [email, hashedPassword, verCode]
  );

  // return { message: "User created successfully" };
  return {};
}
// ---------------------------------------------------------------------------------------

export async function userDataAuthentication(email: string, password: string) {
  const existingUser = await executeQuery(
    "SELECT id, name, phone, bio, role, image_url, password FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length == 0) {
    return { errors: { email: "* Invalid email " } };
  }

  const user: any = existingUser[0];
  
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { errors: { password: "* Incorrect password" } };
  }

  return { user: user };
}

// ---------------------------------------------------------------------------------------

export async function getUserDataFromDB(id: number) {
  const existingUser = await executeQuery("SELECT * FROM users WHERE id = ?", [
    id,
  ]);

  if (existingUser.length == 0) {
    return { errors: { id: "* Invalid existingUser by id in DB Folder  " } };
  }

  const user = existingUser[0];

  return user;
}
// ---------------------------------------------------------------------------------------

export async function updateUserProfileData(
  email: String,

  bio: string,
  name: string,
  age: number,
  phone: String,
  country: String,
  city: string,
  university: string,
  school: string,
  image_url: String
) {
  const UpdateData = await executeQuery(
    "UPDATE users SET  bio = ?,name = ?, age = ?, phone = ? , country = ?, city = ?, university = ?, school = ?, image_url = ? WHERE email = ?",
    [bio, name, age, phone, country, city, university, school, image_url, email]
  );

  return UpdateData;
}

// ---------------------------------------------------------------------------------------
export async function getTop5UsersRanking() {
  const topUsers = executeQuery(
    " SELECT * FROM users ORDER BY points DESC LIMIT 5"
  );
  return topUsers;
}

// ---------------------------------------------------------------------------------------

// export async function cleanCoreExams() {
//   try {
//     const coreExams: any = await executeQuery("SELECT * FROM users_questions");
//     for (const exam of coreExams) {
//       const existingUser = await executeQuery(
//         "SELECT * FROM users WHERE id = ?",
//         [exam.user_id]
//       );
//       if (existingUser.length == 0) {
//         console.log(exam.user_id);
//         await executeQuery("DELETE FROM users_questions WHERE  user_id = ?", [
//           exam.user_id,
//         ]);
//       }
//     }

//     console.log("تم تنظيف جدول users_questions بنجاح");
//   } catch (error) {
//     console.error("حدث خطأ أثناء تنظيف الجدول:", error);
//   }
// }
