import Database from "@tauri-apps/plugin-sql";
// when using `"withGlobalTauri": true`, you may use
// const V = window.__TAURI_PLUGIN_SQL__;
export let execute = async () => {
  let db = await Database.load("sqlite:mydatabase.db");
  //   let x = await db.execute(`CREATE TABLE Numbersx (
  //     ID INTEGER PRIMARY KEY,
  //     Number INTEGER
  // );`);
  // await db.execute(`INSERT INTO users (id, name) VALUES ($1, $2)`, [
  //   31,
  //   "Fadfsa",
  // ]);
  let m = await db.select(`SELECT * FROM users;`);
  //     await db.execute(
  //       `INSERT INTO Students (ID, Name, Age)
  // VALUES (1, 'Alice', 21),
  //        (2, 'Bob', 22),
  //        (3, 'Charlie', 23);
  // `
  //     );
  return m;
  //  await db.close()

  // await db.execute("INSERT INTO users (name) VALUES ('Cardinal');");
  // await db.execute("SELECT * FROM users;");
};
