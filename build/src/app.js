import express from "express";
// import { petsRouter } from "./routes/petsRoute.js";
import router from "./routes/index.js";
const app = express();
app.use(express.json());
router(app);
app.get("/", (req, res) => {
    res.send("Welcome to TypeScript course!");
});
export default app;
