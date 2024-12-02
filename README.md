
# API de Vagas

Uma API RESTful para gerenciar vagas de emprego. Esta API permite criar, listar, atualizar e excluir vagas, além de obter detalhes de vagas específicas.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- SQLite3 (Banco de Dados)
- Body-parser

## Configuração do Ambiente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/api-vagas.git
   cd api-vagas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados em `config/database.js`:
   ```javascript
   const { Sequelize } = require('sequelize');

   const sequelize = new Sequelize({
       dialect: 'sqlite',
       storage: './jobs.sqlite'
   });

   module.exports = sequelize;
   ```

4. Sincronize o banco de dados:
   ```bash
   npm start
   ```

## Endpoints

### Base URL
```
http://localhost:3000/api
```

### Rotas de Usuários

| Método | Rota         | Descrição                           |
|--------|--------------|---------------------------------------|
| GET    | `/user`      | Lista todos os usuários.             |
| GET    | `/user/:id`  | Obtém um usuário pelo ID.            |
| POST   | `/user`      | Cria um novo usuário.                |
| PUT    | `/user/:id`  | Atualiza um usuário existente.       |
| DELETE | `/user/:id`  | Remove um usuário.                   |

### Rotas de Vagas

| Método | Rota         | Descrição                           |
|--------|--------------|---------------------------------------|
| GET    | `/vagas`     | Lista todas as vagas.                |
| GET    | `/vagas/:id` | Obtém uma vaga pelo ID.              |
| POST   | `/vagas`     | Cria uma nova vaga.                  |
| PUT    | `/vagas/:id` | Atualiza uma vaga existente.         |
| DELETE | `/vagas/:id` | Remove uma vaga.                     |

### Exemplo de Requisição

#### Criar Vaga
**POST** `/api/vagas`
```json
{
    "titulo": "Engenheiro de Software Pleno",
    "descricao": "Vaga para engenheiro de software .Net pleno com experiencia a partir de 3 anos",
    "dataCadastro": "2024-11-05",
    "situacao": true,
    "telefone": "(71) 2133-5887",
    "empresa": "Confidencial"
}
```

**Resposta de Sucesso**
```json
{
    "id": 1,
    "titulo": "Engenheiro de Software Pleno",
    "descricao": "Vaga para engenheiro de software .Net pleno com experiencia a partir de 3 anos",
    "dataCadastro": "2024-11-05T00:00:00.000Z",
    "situacao": true,
    "telefone": "(71) 2133-5887",
    "empresa": "Confidencial"
}
```

**Resposta de erro**
```json
{
    "erro": "Vaga não encontrada"
}
```
S
## Scripts Disponíveis

- `npm start`: Inicia o servidor.
- `npm run dev`: Inicia o servidor em modo de desenvolvimento com nodemon.
- `npm test`: Para rodar os testes.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Desenvolvido por [Mateus Dos Santos Gomes](mailto:mateusgomes.mgsantos@gmail.com)
