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