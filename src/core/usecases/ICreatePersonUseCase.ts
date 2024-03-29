import { Person } from "../entities/Person";

export interface ICreatePersonUseCase {
  handle(person: Person): Promise<Person>;
}
