# Bate Papo Uol

<p>Aplicação Back-end de envio, recebimento e armazenamento de mensagens</p>

## Tecnologias utilizadas:
```
JavaScript, Express.js, Node.js, day.js Joi, mongoDB
```

## Rotas:

<ol>
    <li>Post '/participants'</li>
    <li>Get '/participants'</li>
    <li>Post '/messages'</li>
    <li>Get '/messages'</li>
</ol>

### O que cada Rota espera:
1 - {name: string}<br>
3 - estar conectado, com o parametro "name" enviado no headers, o corpo da requisição deve seguir o modelo {to: "todos" ou um "user" específico, type: "message" ou "private_message", text: string}<br>

2 & 4 - estar conectado, com o parametro "name" enviado no headers

## Instruções de Instalação

Para ter acesso ao repositório, faça o download com o seguinte comando shell

### Sem a chave SSH
```
git clone https://github.com/igor-gui/projeto13-batepapo-uol-api.git
```

### Com a chave SSH
```
git clone git@github.com:igor-gui/projeto13-batepapo-uol-api.git
```

Adicione um arquivo .env na raíz do projeto e dentro dele crie uma variável chamada "DATABASE_URL" ex: <code> DATABASE_URL=mongodb://localhost:27017/{nome_do_db} </code>

Entre na pasta e, em seguida, digite os seguintes comandos no terminal integrado do repositório:


```
npm i
npm start
```

Pronto, agora é só fazer as requisições.