import { PersonTypeEnum } from "../enums/PersonTypeEnum";

export class Person {
  constructor(
    private name: string,
    private email: string,
    private document: string,
    private type: PersonTypeEnum,
    private id?: number
  ) {}

  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getDocument(): string {
    return this.document;
  }

  public getType(): PersonTypeEnum {
    return this.type;
  }

  public isPhysical(): boolean {
    return this.type === PersonTypeEnum.PHYSICAL;
  }

  public isLegal(): boolean {
    return this.type === PersonTypeEnum.LEGAL;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setDocument(document: string): void {
    this.document = document;
  }

  public setType(type: PersonTypeEnum): void {
    this.type = type;
  }

  public setPhysical(): void {
    this.type = PersonTypeEnum.PHYSICAL;
  }

  public setLegal(): void {
    this.type = PersonTypeEnum.LEGAL;
  }
}
