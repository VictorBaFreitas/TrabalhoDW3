# API Financeira - Backend

Este é o backend do projeto API Financeira, desenvolvido na disciplina de Desenvolvimento Web 3. O backend é responsável por gerenciar as operações de contas e usuários, utilizando Node.js, Express e PostgreSQL.

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- JWT (JSON Web Token) para autenticação
- bcryptjs para hash de senhas
- dotenv para gerenciamento de variáveis de ambiente

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/TrabalhoDW3.git

   cd TrabalhoDW3/api-financeira/backend
2. Instale as dependências:

    ```
    npm install
3. Configure as variáveis de ambiente:
- Crie um arquivo .env na raiz do diretório backend e adicione as seguintes variáveis:

    ```
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_USER=postgres
    DB_PASS=postdba
    DB_NAME=sistemafinanceiro
    SECRET_API=9as1%12#xz0#@
4. Inicie o servidor:

    ```
    node server.js
- O servidor estará rodando na porta 30000

5. Estrutura do projeto: 
    ```
    backend/
    ├── src/
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   │   ├── authController.js
    │   │   └── contaController.js
    │   ├── models/
    │   │   ├── contaModel.js
    │   │   └── usuarioModel.js
    │   ├── routes/
    │   │   ├── authRoutes.js
    │   │   └── contaRoutes.js
    │   ├── utils/
    │   │   └── jwtUtils.js
    │   └── server.js
    ├── .env
    ├── package.json
    └── README.md
6. Endpoints
- Autenticação:
    - POST /api/auth/register: Registra um novo usuário.
    - POST /api/auth/login: Autentica um usuário e retorna um token JWT.
- Contas:
    - GET /api/contas: Retorna todas as contas.
    - GET /api/contas/:id: Retorna uma conta específica pelo ID.
    - POST /api/contas: Cria uma nova conta.
    - PUT /api/contas/:id: Atualiza uma conta existente pelo ID.
    - DELETE /api/contas/:id: Remove uma conta pelo ID.

7. Autenticação: A autenticação é feita utilizando JWT. Para acessar os endpoints protegidos, é necessário incluir o token JWT no cabeçalho da requisição:

    ```
    x-auth-token: seu-token-jwt
8. Testes: 
- Os testes podem ser realizados utilizando o arquivo tests.rest com a extensão REST Client do VSCode.

9. Contribuição: 
- Faça um fork do projeto.
- Crie uma branch para sua feature (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -am 'Adiciona nova feature').
- Faça um push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.

10. Licença
- Este projeto está licenciado sob a licença MIT.