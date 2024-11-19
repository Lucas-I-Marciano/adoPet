import { EnumSpecie } from "../enum/EnumSpecie.js";

export type PetType = {
  id: number;
  name: string;
  specie: EnumSpecie;
  birthday: Date;
  adopted: boolean;
};
