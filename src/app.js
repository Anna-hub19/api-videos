import { Express } from "express";

const app = Express();

app.use(json());

app.get('/teste', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});
  
 export default app;