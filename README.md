---
title: 'API documentation'
---

API com nest.js
===
![downloads](https://img.shields.io/github/downloads/atom/atom/total.svg)
![build](https://img.shields.io/appveyor/ci/:user/:repo.svg)
![chat](https://img.shields.io/discord/:serverId.svg)

## Index

[TOC]

## Descrição
---

Este é um simples projeto desenvolvido em nest.js, onde foi feito um CRUD de cursos, salvos no "cache", ou seja sem integração com banco de dados.

## Flow
---
```sequence
User->API:
API->Controller:
Controller->Services:
Services->Controller:
Controller->API:
API->User:
```

## Rotas
### GET /courses/list

Este endpoint, listará todos os cursos inseridos no "banco de dados" local.

```gherkin=
// GET /courses/list
// no body content
```


## Estruturas

### Diretorios

![](https://i.imgur.com/RKU3OKQ.png)

### Arquivos

#### main.ts

![](https://i.imgur.com/BcZ6z7A.png)


---

#### app.module.ts

![](https://i.imgur.com/Ae2XLLW.png)


---

#### Course.entity.ts

![](https://i.imgur.com/16vjiQ3.png)



---

#### courses.module.ts

![](https://i.imgur.com/mEXalBk.png)

---

#### courses.service.ts
Aqui é feito as funções que concluirão as tarefas enviadas pelo controller e após executadas serão retornadas ao controler.

![](https://i.imgur.com/deECwix.png)


---

#### courses.controller.ts

Aqui definimos os metodos e "chamando" as funções do "service" e retornando dados ao usuário.

![](https://i.imgur.com/TmXFyXl.png)



---
