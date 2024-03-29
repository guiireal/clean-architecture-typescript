import { Request, Response } from "express";
import { DomainException } from "../../core/exceptions/DomainException";
import { ICreatePersonUseCase } from "../../core/usecases/ICreatePersonUseCase";
import { PersonDTO } from "../dtos/PersonDTO";
import { PersonMapper } from "../mappers/PersonMapper";

export class PersonController {
  constructor(
    public readonly createPersonUseCase: ICreatePersonUseCase,
    public readonly personMapper: PersonMapper
  ) {}

  async store(
    request: Request,
    response: Response
  ): Promise<Response<PersonDTO>> {
    try {
      const personDTO: PersonDTO = request.body;

      const person = this.personMapper.toEntity(personDTO);

      const personCreated = await this.createPersonUseCase.handle(person);

      const personDTOCreated = this.personMapper.toDTO(personCreated);

      return response.status(201).json(personDTOCreated);
    } catch (error) {
      if (error instanceof DomainException) {
        return response.status(400).json({ message: error.message });
      }

      return response.status(500).json({ message: "Internal server error." });
    }
  }
}
