import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to TypeScript course!");
});

function createPet(
  id: Number,
  name: String,
  specie: String,
  age: Number,
  adopted: Boolean
) {
  return {
    id,
    name,
    specie,
    age,
    adopted,
  };
}

let id = 0;
function generateId() {
  id = id + 1;
  return id;
}

app.post("/pets", (_, res) => {
  const pet1 = createPet(generateId(), "Bolt", "cachorro", 3, false);
  const pet2 = createPet(generateId(), "Mel", "gato", 2, false);

  res.send([pet1, pet2]);
});

export default app;
