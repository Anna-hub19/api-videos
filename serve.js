import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "testando videos",
    
};


app.listen(PORT, () => {
    console.log("servidor escutando!");
});