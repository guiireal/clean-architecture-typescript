import { getSQLite3Connection } from "../database/sqlite3-connection";

export function createPeopleTable() {
  const db = getSQLite3Connection();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.exec(
        `CREATE TABLE IF NOT EXISTS people (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          document TEXT NOT NULL,
          type INTEGER NOT NULL
        )`,
        (error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(true);
        }
      );
    });
  });
}
