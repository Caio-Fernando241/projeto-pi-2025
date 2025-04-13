const errorHandler = require('./middlewares/errorHandler');
const express = require('express');
const app = express();
const routes = require('./routers/routes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/', routes);
app.use(errorHandler); // Deve ser o último middleware

const PORT = 3000;
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});