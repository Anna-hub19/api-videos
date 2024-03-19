import express from "express";
import conectaDb from "../config/dbConect.js";
import routes from "../routes/index.js";

const app = express();
app.use(express.json());
routes(app);
const conexao = await conectaDb();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro)
})
conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})




export default app;