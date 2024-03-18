import express from "express";
import conectaDb from "../config/dbConect.js";
import video from "./models/videos.js";

const app = express();
app.use(express.json());
const conexao = await conectaDb();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro)
})
conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})


app.get("/", (req, res) => {
    res.status(200).send("videos api");
  });

app.get("/videos", async(req, res)=> {
  const listaVideos = await video.find({})
   res.status(200).json(listaVideos);
});
app.get("/videos/:id", async(req, res)=>{
  const listaVideos = await video.find({})
    const index = buscaVideo(req.params.id);
    res.status(200).json(listaVideos[index]);
})
app.post("/videos", async(req, res) => {
  const listaVideos = await video.find({})
    listaVideos.push(req.body);
    res.status(201).send("video cadastrado com sucesso");
  });
  
  app.put("/videos/:id",async (req, res) => {
    const listaVideos = await video.find({})
    const index = buscaVideo(req.params.id);
    listaVideos[index].titulo = req.body.titulo;
    res.status(200).json(listaVideos);
  });
  
  app.delete("/videos/:id", async(req, res) => {
    const listaVideos = await video.find({})
    const index = buscaVideo(req.params.id);
    listaVideos.splice(index, 1);
    res.status(200).send("video removido com sucesso");
  });
  


export default app;