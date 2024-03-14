import express from "express";
import conectaDb from "../config/dbConect.js";


const app = express();
app.use(express.json());
const conexao = await conectaDb();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro)
})
conexao.once("open", () => {
  console.log("conexão com o banco feita com sucesso")
})

const videos = [
    {
      id: 1,
      titulo: "curso node",
      descricao: "curso de node pela alura",
      url: "https://cursoNode.com"
    },
    {
      id: 2,
      titulo: "curso angular",
      descricao: "curso de angular pela alura",
      url: "https://cursoAngular.com"
    }
  ]
  function buscaVideo(id) {
    return videos.findIndex(video => {
      return video.id === Number(id);
    })
  }

app.get("/", (req, res) => {
    res.status(200).send("videos api");
  });

app.get("/videos", (req, res)=> {
   res.status(200).json(videos);
});
app.get("/videos/:id", (req, res)=>{
    const index = buscaVideo(req.params.id);
    res.status(200).json(videos[index]);
})
app.post("/videos", (req, res) => {
    videos.push(req.body);
    res.status(201).send("video cadastrado com sucesso");
  });
  
  app.put("/videos/:id", (req, res) => {
    const index = buscaVideo(req.params.id);
    videos[index].titulo = req.body.titulo;
    res.status(200).json(videos);
  });
  
  app.delete("/videos/:id", (req, res) => {
    const index = buscaVideo(req.params.id);
    videos.splice(index, 1);
    res.status(200).send("video removido com sucesso");
  });
  


export default app;