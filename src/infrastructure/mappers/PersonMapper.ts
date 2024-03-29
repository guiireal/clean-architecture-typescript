import { Person } from "../../core/entities/Person";
import { PersonDTO } from "../dtos/PersonDTO";

export class PersonMapper {
  public toEntity(personDTO: PersonDTO) {
    const { name, email, document, type } = personDTO;

    return new Person(name, email, document, type);
  }

  public toDTO(person: Person): PersonDTO {
    return {
      id: person.getId(),
      name: person.getName(),
      email: person.getEmail(),
      document: person.getDocument(),
      type: person.getType(),
    };
  }
}
