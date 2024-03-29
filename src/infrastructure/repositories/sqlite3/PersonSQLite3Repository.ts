import { Database, RunResult } from "sqlite3";
import { Person } from "../../../core/entities/Person";
import { IPersonRepository } from "../../../core/repositories/IPersonRepository";
import { getSQLite3Connection } from "../../database/sqlite3-connection";

export class PersonSQLite3Repository implements IPersonRepository {
  private readonly db: Database;

  constructor() {
    this.db = getSQLite3Connection();
  }

  async create(person: Person): Promise<Person> {
    return new Promise((resolve, reject) => {
      this.db.run(
        "INSERT INTO people (name, email, document, type) VALUES (?, ?, ?, ?)",
        [
          person.getName(),
          person.getEmail(),
          person.getDocument(),
          person.getType(),
        ],
        function (this: RunResult, error: Error) {
          if (error) {
            reject(error);
            return;
          }

          person.setId(this.lastID);

          resolve(person);
        }
      );
    });
  }

  async findByDocument(document: string): Promise<Person | null> {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT * FROM people WHERE document = ?",
        [document],
        (error: Error | null, row: any) => {
          if (error) {
            reject(error);
            return;
          }

          if (!row) {
            resolve(null);
            return;
          }

          resolve(
            new Person(row.name, row.email, row.document, row.type, row.id)
          );
        }
      );
    });
  }
}
