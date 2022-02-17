# API de tarefas

## Índice

- [Descrição](#descrição)
- [Como Usar Online](#como-usar-online)
- [Pré-requisitos](#pré-requisitos-para-rodar-a-aplicação)
- [Como Usar Localmente](#como-usar-no-ambiente-local)
- [Desenvolvimento](#desenvolvimento)
- [Arquitetura](#arquitetura)
- [Outros Scripts da Aplicação](#outros-scripts-configurados-na-aplicação)
- [Cobertura de Testes](#cobertura-de-testes)
- [Deploy](#deploy)
- [Contribuições](#Contribuições)
- [Pontos de Melhoria](#pontos-de-melhoria)
- [Contato](#contato)

## Descrição

Repositório com o código de uma **API Rest**, em Node.js com Express usando banco de dados MongoDB.

Esta API foi desenvolvida para o desafio técnico do processo seletivo da Ebytr.
O desafio era a construção de uma aplicação de gerenciamento de tarefas para a equipe da Ebytr. Essa API REST é a aplicação backend desse sistema. Nela é possível criar usuários e criar, editar e listar tarefas.

As rotas disponíveis são:

- POST/login
- POST/users
- POST/tasks
- GET/tasks/:userId
- PATCH/tasks/status/:taskId
- PATCH/tasks/description/:taskId

Para mais detalhes sobre cada rota, testar a funcionalidade, ver os parâmetros e respostas, acesse o Swagger. (detalhes abaixo)

## Como usar online

Para acessar a página Swagger da aplicação rodando e/ou testar a aplicação, ver detalhadamente os parâmetros esperados, as possíveis respostas e sua formatação, basta clicar [aqui](https://rslfilho-ebytr.herokuapp.com/swagger/).

Para fazer requisições à aplicação rodando, use o endpoint `https://rslfilho-ebytr.herokuapp.com/`, exemplo:

```bash
curl -X 'POST' \
  'https://rslfilho-ebytr.herokuapp.com/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "fulano@email.com",
  "password": "123456"
}'
```

## Pré-requisitos para rodar a aplicação

- Node.js
- NPM
- MongoDB

## Como usar no ambiente local

1 - Para clonar o repositório, vá até o diretório onde deseja clonar, execute o `git clone` e depois entre no diretório criado:

```bash
git clone git@github.com:rslfilho/desafio-ebytr-back-end.git
cd desafio-ebytr-back-end
```

2- Já dentro do diretório, instale as depedências (pode usar `npm` ou `yarn`):

```bash
yarn install
```
ou
```bash
npm install
```

3 - Crie um arquivo `.env` na pasta raiz da aplicação com as seguintes variáveis (mude a url do seu banco MongoDB se não for o padrão):

```env
NODE_ENV="development"
MONGODB_URL='mongodb://localhost:27017/to-do-app'
JWT_SECRET='meu_segredo_muito_forte'
```

4 - Depois de instaladas as depedências, inicie a aplicação:

```bash
yarn start
```
ou
```bash
npm start
```

5 - A aplicação estárá rodando e acessível em `http://localhost:3001/`. A porta pode modificar se tiver uma variável `PORT` no ambiente que estiver executando;

6 - Para fazer requisições à aplicação rodando, use o endpoint `http://localhost:3001/`, exemplo:

```bash
curl -X 'POST' \
  'http://localhost:3001/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "firstName": "Usuário",
  "lastName": "Teste",
  "email": "teste@email.com",
  "password": "123456"
}'
```

7 - Para acessar a descrição da API e/ou testar seu funcionamento, ver detalhadamente os parâmetros esperados, as possíveis respostas e sua formatação, basta acessar `http://localhost:3001/swagger/`.

## Desenvolvimento

A API foi desenvolvida em Node.js com Express e MongoDB.

Além disso, as dependências da aplicação são:

- `cors@^2.8.5` para liberação de acesso
- `joi@^17.6.0` para validação de `schemas` e dados
- `jsonwebtoken@^8.5.1` para autenticação de usuários
- `mongodb@^4.3.1` para conexão com o banco
- `swagger-ui-express@^4.3.0` para criação da página visual de descrição e teste da API
- `yamljs@^0.3.0` para leitura do arquivo `yaml` de configuração do Swagger

No ambiente de desenvolvimento ainda são usadas as dependências:

- `nodemon@^2.0.15` para iniciar a aplicação com reinício automático
- `eslint@^8.8.0`, `eslint-config-trybe-backend@^1.0.4`, `eslint-plugin-import@^2.25.4`, `eslint-plugin-mocha@^10.0.3` e `eslint-plugin-sonarjs@ˆ0.11.0` para configuração do ESLint

## Arquitetura

Usei uma arquitetura baseada em MSC (Model, Service, Controller). Model para conectar, ler e escrever dados no banco de dados; Service para tratar os dados e executar a lógica da aplicação; e Controller para receber e tratar os dados da requisição e, depois de acessar o Service, retornar a resposta ao usuário.

A API está contida na pasta `/src` dentro da raiz do repositório, nela temos:

- `/api` arquivos de configuração e início da aplicação
- `/controllers` arquivos de Controllers da aplicação
- `/database` arquivos de Models da aplicação e conexão com o banco
- `/helpers` funções ou dados auxiliares
- `/middlewares` arquivos de middlewares como o de Erro e o de configuração do Swagger
- `/routers` configuração de roteadores do Express
- `/services` arquivos de Serviços da aplicação

## Outros Scripts configurados na aplicação

* `yarn dev` ou `npm run dev` para rodar a aplicação com Nodemon e reinício automático na atualização de qualquer arquivo;
* `yarn lint` ou `npm run lint` para rodar o ESLint;

## Cobertura de testes

A cobertura de testes está em 20.45%. Apenas com testes dos Models.

## Deploy

Esta aplicação está rodando na plataforma do Heroku, usando a integração direta com o GitHub. O banco de dados está hospedado na Atlas.

Está acessível pelo endpoint `https://rslfilho-ebytr.herokuapp.com/`.

É possível acessar a página Swagger da aplicação rodando e/ou testar a aplicação, ver detalhadamente os parâmetros esperados, as possíveis respostas e sua formatação [aqui](https://rslfilho-ebytr.herokuapp.com/swagger/).

## Contribuições

Fique à vontade para abrir um PR para qualquer contribuição que desejar. 

Na abertura e atualizações de PR's serão executadas duas `actions`. 
A primeira rodará o ESLint para fazer a análise estática do código, já a segunda rodará os testes da aplicação.
Aprovadas as duas `actions` e depois do CR de um dos proprietários do código, o PR poderá ser mergeado.

O arquivo com as `actions` pode ser encontrado [aqui](https://github.com/rslfilho/desafio-ebytr-back-end/tree/main/.github/workflows).

## Pontos de melhoria

- Adicionar mais testes, no momento só tem dos Models.
- Fazer a aplicação Front-end

## Contato

Desenvolvido por Roberval Filho

Email: rslfilho@gmail.com

Github: https://github.com/rslfilho

LinkedIn: https://www.linkedin.com/in/rslfilho/
