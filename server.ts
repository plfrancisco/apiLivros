import express from "express";
import livrosRouter from "./src/routes/livros";

const app = express();
app.use(express.json());
app.use("/livros", livrosRouter);

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
