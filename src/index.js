const express = require('express');
require('express-async-errors');//para tratar erros assincronos. yarn add express-async-errors

const routes = require('./routes');

const app = express();

app.use(express.json());//assim consigo pegar o body da requisicao, precisa estar acima do use(routes)
app.use(routes);

// Usado para tratar erros sincronos. Deve ter obrigatoriamente e nessa ordem error,req,res e next.
app.use((error,req,res,next)=>{
  console.log("### Error Handler");
  console.log(error);
  res.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
