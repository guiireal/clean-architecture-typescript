import { Person } from "../entities/Person";
import { DomainException } from "../exceptions/DomainException";
import { IPersonRepository } from "../repositories/IPersonRepository";
import { ICreatePersonUseCase } from "./ICreatePersonUseCase";

export class CreatePersonUseCase implements ICreatePersonUseCase {
  constructor(private readonly personRepository: IPersonRepository) {}

  async handle(person: Person): Promise<Person> {
    const hasPersonWithDocument = await this.personRepository.findByDocument(
      person.getDocument()
    );

    if (hasPersonWithDocument) {
      throw new DomainException("Person with this document already exists.");
    }

    return await this.personRepository.create(person);
  }
}
