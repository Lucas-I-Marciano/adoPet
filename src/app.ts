import express, { Request, Response } from "express";
// import { petsRouter } from "./routes/petsRoute.js";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
router(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to TypeScript course!");
});

export default app;
