require('dotenv').config();
const express = require('express');
require('express-async-errors');//para tratar erros assincronos. yarn add express-async-errors

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());//assim consigo pegar o body da requisicao, precisa estar acima do use(routes);

// cors - deve vir antes do routes, assim ela será chamada em todas as rotas
app.use(cors);
app.use(routes);
// Usado para tratar erros sincronos. Deve ter obrigatoriamente e nessa ordem error,req,res e next.
app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`🔥 Server started at http://${process.env.HOST}:${process.env.PORT}`));
