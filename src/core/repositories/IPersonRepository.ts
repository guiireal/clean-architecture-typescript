import { Person } from "../entities/Person";

export interface IPersonRepository {
  create(person: Person): Promise<Person>;
  findByDocument(document: string): Promise<Person | null>;
}
