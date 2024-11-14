import { EnumSpecie } from "../enum/enumSpecie.js";

export type PetType = {
  id: number;
  name: string;
  specie: EnumSpecie;
  birthday: Date;
  adopted: boolean;
};
