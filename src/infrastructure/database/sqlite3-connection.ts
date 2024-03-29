import path from "path";
import sqlite3 from "sqlite3";

export function getSQLite3Connection() {
  return new sqlite3.Database(
    path.resolve(__dirname, "..", "..", "..", "database", "db.sqlite")
  );
}
