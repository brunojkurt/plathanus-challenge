![Demo Image](https://user-images.githubusercontent.com/31192708/97913729-7fcff100-1d2d-11eb-9d2b-3a655cd588b8.PNG)

## Requesitos

- NodeJS
- Docker
- Docker compose
- Yarn (To run tests)

## Técnologias utilizadas

- Docker
- Node
- Express
- Postgresql
- Knex
- React
- Redux
- Styled Components
- Jest


## Configuração

- Para rodar os scripts de teste, migrations, seeds e react-scripts é necessário executar o comando "npm install" nos diretórios:
"plathanus-challenge/server"
"plathanus-challenge/web"
"plathanus-challenge/web-adm"
- Para executar o teste feito com Jest, executar o comando "npm test" no diretório:
"plathanus-challenge/server"

## Iniciando o App

- Para iniciar a aplicação é necessario que o Docker esteja sendo executado no ambiente e executar o comando "docker-compose up" no diretório raiz da aplicação onde se encontra o arquivo "docker-compose.yml"

**Obs: Em sua primeira execução os containers podem demorar a subir pois é necessário a criação dos containers e a instalação das dependências.
**
## Utilizando a aplicação

A aplicação é dividida entre dois ambientes que se comunicam com a api, uma é a página do client e a outra é a página de administração, elas podem ser acessadas pelos endereços:

cliente:
http://localhost:3000
administração:
http://localhost:3333

Os dados padrões de login na página de administração:
e-mail: admin@plathanus.com.br
senha: plathanus@2020

Obs: Autenticação feita com JWT, administrada por Redux, Redux Persist;

O conteúdo da página pode ser alterado pelo painel de administração que você será redirecionado após realizar o login, ou acessado através do endereço: "http://localhost:3001/dashboard"

