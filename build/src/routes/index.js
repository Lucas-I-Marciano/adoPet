import { petsRouter } from "./petsRoute.js";
const routes = (app) => {
    app.use("/pets", petsRouter);
};
export default routes;
