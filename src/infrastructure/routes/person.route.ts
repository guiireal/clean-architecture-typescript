import { Router } from "express";
import { CreatePersonUseCase } from "../../core/usecases/CreatePersonUseCase";
import { PersonController } from "../controllers/PersonController";
import { PersonMapper } from "../mappers/PersonMapper";
import { PersonSQLite3Repository } from "../repositories/sqlite3/PersonSQLite3Repository";

const personRoutes = Router();

const personSQLite3Repository = new PersonSQLite3Repository();
const createPersonUseCase = new CreatePersonUseCase(personSQLite3Repository);
const personMapper = new PersonMapper();

const personController = new PersonController(
  createPersonUseCase,
  personMapper
);

personRoutes.post("/", (request, response) => {
  personController.store(request, response);
});

export { personRoutes };
