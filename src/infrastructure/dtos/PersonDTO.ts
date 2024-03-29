import { PersonTypeEnum } from "../../core/enums/PersonTypeEnum";

export type PersonDTO = {
  id?: number;
  name: string;
  email: string;
  document: string;
  type: PersonTypeEnum;
};
