const express = require('express');
const routes = require('./routes')
const app = express();

app.use(express.json());//assim consigo pegar o body da requisicao, precisa estar acima do use(routes)
app.use(routes);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
