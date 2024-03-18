import mongoose from "mongoose";

const videosSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    titulo:{type: String, require: true },
    descricao:{type: String},
    url:{type: String, require: true}
}, {versionKey: false});

const video = mongoose.model("videos", videosSchema);

export default video;