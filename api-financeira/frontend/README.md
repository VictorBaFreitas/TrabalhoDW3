# API Financeira - Frontend

Este é o frontend do projeto API Financeira, desenvolvido na disciplina de Desenvolvimento Web 3. O frontend é responsável por consumir a API do backend e fornecer uma interface de usuário para gerenciar contas e usuários.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- EJS (Embedded JavaScript templates)
- Bootstrap
- Axios

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/TrabalhoDW3.git

   cd TrabalhoDW3/api-financeira/frontend
2. Instale as dependências:

    ```
    npm install
3. Inicie o servidor:

    ```
    node server.js
- O servidor estará rodando na porta 40000

4. Estrutura do projeto: 

    ```
    frontend/
    ├── views/
    │   ├── login.ejs
    │   └── dashboard.ejs
    │   └── manageAccount.ejs
    └── server.js
5. Funcionalidades
- Login:
    - Página de Login: Permite que os usuários façam login na aplicação.
- Dashboard: 
    - Página de Dashboard: Exibe todas as contas cadastradas, ou por consultas com o ID e permite gerenciar as contas (criar, atualizar, excluir).
- Gerenciamento de Contas: 
    - Página de Gerenciamento de Contas: Permite criar uma nova conta ou atualizar uma conta existente.

6. Contribuição:
- Faça um fork do projeto.
- Crie uma branch para sua feature (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -am 'Adiciona nova feature').
- Faça um push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.

7. Licença
- Este projeto está licenciado sob a licença MIT.
