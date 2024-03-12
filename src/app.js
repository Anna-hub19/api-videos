import express from "express";

const app = express();
app.use(express.json());

const videos = [
    {
      id: 1,
      titulo: "curso node"
    },
    {
      id: 2,
      titulo: "curso angular"
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