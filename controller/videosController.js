import video from "../src/models/videos.js";

class videoController {
 
    static async ListarVideos (req, res) {
      const listavideos = await video.find({});
    res.status(200).json(listavideos);
    }


     static async listarvideoPorId (req, res) {
    try {
      const id = req.params.id;
      const videoEncontrado = await video.findById(id);
      res.status(200).json(videoEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do video` });
    }
  };

  static async cadastrarvideo (req, res) {
    try {
      const novovideo = await video.create(req.body);
      res.status(201).json({ message: "criado com sucesso", video: novovideo });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar video` });
    }
  }

  static async atualizarvideo (req, res) {
    try {
      const id = req.params.id;
      await video.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "video atualizado" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async excluirvideo (req, res) {
    try {
      const id = req.params.id;
      await video.findByIdAndDelete(id);
      res.status(200).json({ message: "video excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };

};


export default videoController;
