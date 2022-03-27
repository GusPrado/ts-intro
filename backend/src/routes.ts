import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Online now");
});

routes.get("/users", UserController.index);
routes.post("/users", UserController.create);

export default routes;
