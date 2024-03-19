import express from "express";
import videoController from "../controller/videosController.js";

const routes = express.Router();

routes.get("/videos", videoController.ListarVideos);
routes.get("/videos/:id", videoController.listarvideoPorId);
routes.post("/videos", videoController.cadastrarvideo);
routes.put("/videos/:id", videoController.atualizarvideo);
routes.delete("/videos/:id", videoController.excluirvideo);

export default routes;