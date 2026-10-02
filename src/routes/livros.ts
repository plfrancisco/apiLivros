import { Router } from "express";
import { prisma } from "../../prisma";

const router = Router();

router.get("/", async (_req, res) => {
  const livros = await prisma.livros.findMany();
  res.json(livros);
});

router.get("/:id", async (req, res) => {
  const livro = await prisma.livros.findUnique({ where: { id: Number(req.params.id) } });
  if (!livro) return res.status(404).json({ erro: "Livro não encontrado" });
  res.json(livro);
});

router.post("/", async (req, res) => {
  try {
    const { titulo, autor, anoPublicacao, isbn, preco } = req.body;
    const livro = await prisma.livros.create({
      data: { titulo, autor, anoPublicacao, isbn, preco },
    });
    res.status(201).json(livro);
  } catch {
    res.status(400).json({ erro: "Dados inválidos ou ISBN já cadastrado" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { titulo, autor, anoPublicacao, isbn, preco } = req.body;
    const livro = await prisma.livros.update({
      where: { id: Number(req.params.id) },
      data: { titulo, autor, anoPublicacao, isbn, preco },
    });
    res.json(livro);
  } catch {
    res.status(404).json({ erro: "Livro não encontrado ou dados inválidos" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await prisma.livros.delete({ where: { id: Number(req.params.id) } });
    res.status(204).send();
  } catch {
    res.status(404).json({ erro: "Livro não encontrado" });
  }
});

export default router;
