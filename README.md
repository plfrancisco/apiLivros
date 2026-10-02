# API Livros

![Node.js](https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![status](https://img.shields.io/badge/status-concluído-success)

API REST com operações CRUD para a entidade Livros, desenvolvida como
atividade da disciplina de Backend do 3° semestre de Tecnologia em Sistemas
para Internet (TSI).

## Sumário

- [Visão geral](#visão-geral)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como executar](#como-executar)
- [Endpoints](#endpoints)
- [Stack técnica](#stack-técnica)
- [Autor](#autor)

## Visão geral

A API expõe o cadastro completo de livros (listar, buscar, criar, atualizar
e remover), persistidos em MySQL por meio do Prisma ORM.

**Modelo `Livros`**

| Campo | Tipo | Observações |
|---|---|---|
| `id` | Int | Chave primária, autoincremento |
| `titulo` | String | |
| `autor` | String | |
| `anoPublicacao` | Int | |
| `isbn` | String | Único |
| `preco` | Decimal(10,2) | |
| `criadoEm` | DateTime | Preenchido automaticamente |

## Estrutura do projeto

```
apiLivros/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/routes/livros.ts   # rotas do CRUD
├── prisma.ts              # instância do Prisma Client
├── prisma7.config.ts
├── server.ts              # entrada da aplicação
└── .env.example
```

## Como executar

Pré-requisitos: Node.js 20+ e MySQL em execução com um banco chamado `livros`.

```bash
git clone https://github.com/plfrancisco/apiLivros.git
cd apiLivros

# Instalar dependências
npm install

# Configurar o ambiente (ajuste a DATABASE_URL)
cp .env.example .env

# Aplicar a migration e gerar o Prisma Client
npx prisma migrate dev
npx prisma generate

# Iniciar a API
npm run dev
```

A API sobe em `http://localhost:3000` (ou na porta definida em `PORT`).

## Endpoints

| Método | Rota | Descrição | Resposta |
|---|---|---|---|
| GET | `/livros` | Lista todos os livros | `200` |
| GET | `/livros/:id` | Busca um livro pelo id | `200` / `404` |
| POST | `/livros` | Cadastra um livro | `201` / `400` |
| PUT | `/livros/:id` | Atualiza um livro | `200` / `404` |
| DELETE | `/livros/:id` | Remove um livro | `204` / `404` |

Exemplo de corpo para `POST` e `PUT`:

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "isbn": "9788535910663",
  "preco": 39.9
}
```

## Stack técnica

Node.js · TypeScript · Express 5 · Prisma ORM 7 · MySQL · tsx

## Autor

**Pedro Lucas Francisco de Almeida**
