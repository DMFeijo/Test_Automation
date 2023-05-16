## Executando os testes

Para executar os testes, siga as etapas abaixo:

1. Abra o Cypress Test Runner:
1. Selecione o arquivo de teste desejado na interface do Cypress Test Runner.
3. Aguarde a execução dos testes e verifique os resultados no painel do Cypress. 


## Cenários de Teste

A seguir estão os cenários de teste implementados para cada funcionalidade:

### Login

- Teste de login válido
  - Descrição: Verifica se é possível fazer login com credenciais válidas.
  - Arquivo de teste: `login.spec.js`

- Teste de login inválido
  - Descrição: Verifica se é exibida uma mensagem de erro ao fazer login com credenciais inválidas.
  - Arquivo de teste: `login.spec.js`

- Teste de campo obrigatório
  - Descrição: Verifica se é exibida uma mensagem de erro ao deixar campos obrigatórios em branco durante o login.
  - Arquivo de teste: `login.spec.js`

### Logout

- Realizar logout
  - Descrição: Verifica se é possível fazer logout após estar logado na aplicação.
  - Arquivo de teste: `logout.spec.js`

### Criação de Usuário

- Preenchimento bem-sucedido do formulário
  - Descrição: Verifica se é possível preencher corretamente o formulário de criação de usuário e salvar as informações.
  - Arquivo de teste: `create-user.spec.js`

### Login API

- Login bem-sucedido
  - Descrição: Verifica se é possível fazer login através da API e obter um token de autenticação.
  - Arquivo de teste: `login-api.spec.js`

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.👍