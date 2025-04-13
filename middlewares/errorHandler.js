const fs = require('fs'); // Adicione no TOPO do arquivo

module.exports = (err, req, res, next) => {
  // Adicione esta linha como PRIMEIRA ação do middleware:
  fs.appendFileSync('errors.log', `${new Date().toISOString()} - ${err.stack}\n`);
  
  console.error(err.stack);
  
  if (err.message.includes("não encontrado")) {
    return res.status(404).json({ error: err.message });
  }

  if (err.message.includes("já existe") || err.message.includes("já está em uso")) {
    return res.status(409).json({ error: err.message });
  }

  res.status(500).json({ error: "Erro interno no servidor" });
};