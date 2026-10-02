# API Livros

CRUD da entidade Livros com Node.js, TypeScript, Express, Prisma e MySQL.

**Aluno:** Pedro Lucas Francisco de Almeida

## Como executar

1. Instalar as dependências: `npm install`
2. Criar o banco `livros` no MySQL e ajustar a `DATABASE_URL` no arquivo `.env`
3. Aplicar a migration: `npx prisma migrate dev`
4. Gerar o Prisma Client: `npx prisma generate`
5. Iniciar a API: `npm run dev`

## Rotas

| Verbo | Rota | Descrição |
|---|---|---|
| GET | `/livros` | Lista todos os livros |
| GET | `/livros/:id` | Busca um livro pelo id |
| POST | `/livros` | Cadastra um livro |
| PUT | `/livros/:id` | Atualiza um livro |
| DELETE | `/livros/:id` | Remove um livro |

Exemplo de corpo para POST e PUT:

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "isbn": "9788535910663",
  "preco": 39.9
}
```
