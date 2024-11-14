import express, { Request, Response } from "express";
import router from "./routes/index.js";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source.js";

const app = express();
app.use(express.json());
router(app);

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((error) => {
    console.error(error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to TypeScript course!");
});

export default app;
