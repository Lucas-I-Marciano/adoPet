import { petsRouter } from "./petsRoute.js";
import { adopterRouter } from "./adopterRoute.js";
const routes = (app) => {
    app.use("/pets", petsRouter);
    app.use("/adopter", adopterRouter);
};
export default routes;
