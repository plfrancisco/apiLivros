# API Livros

API REST com operações CRUD para a entidade **Livros**, desenvolvida com Node.js, TypeScript, Express, Prisma ORM e MySQL.

Projeto da disciplina de Banco de Dados / Backend do 3° semestre de Tecnologia em Sistemas para Internet (TSI).

## Tecnologias

- [Node.js](https://nodejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Express 5](https://expressjs.com/)
- [Prisma ORM 7](https://www.prisma.io/) com adapter MariaDB
- MySQL
- [tsx](https://tsx.is/) para execução em desenvolvimento

## Pré-requisitos

- Node.js 20 ou superior
- MySQL em execução, com um banco chamado `livros`

## Como executar

```bash
# 1. Instalar as dependências
npm install

# 2. Configurar o ambiente
cp .env.example .env   # ajuste a DATABASE_URL com seus dados do MySQL

# 3. Aplicar a migration e gerar o Prisma Client
npx prisma migrate dev
npx prisma generate

# 4. Iniciar a API
npm run dev
```

A API sobe em `http://localhost:3000` (ou na porta definida em `PORT`).

## Variáveis de ambiente

| Variável | Descrição | Exemplo |
| --- | --- | --- |
| `DATABASE_URL` | String de conexão com o MySQL | `mysql://usuario:senha@localhost:3306/livros` |
| `PORT` | Porta da API (opcional, padrão `3000`) | `3000` |

## Modelo de dados

| Campo | Tipo | Observações |
| --- | --- | --- |
| `id` | Int | Chave primária, autoincremento |
| `titulo` | String | |
| `autor` | String | |
| `anoPublicacao` | Int | |
| `isbn` | String | Único |
| `preco` | Decimal(10,2) | |
| `criadoEm` | DateTime | Preenchido automaticamente |

## Endpoints

| Método | Rota | Descrição | Resposta |
| --- | --- | --- | --- |
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

## Estrutura

```text
apiLivros/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/routes/livros.ts   # rotas do CRUD
├── prisma.ts              # instância do Prisma Client
├── server.ts              # entrada da aplicação
└── prisma7.config.ts
```

## Autor

Pedro Lucas Francisco de Almeida
