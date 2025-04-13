const validateUser = (req, res, next) => {
    const { name, email } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ error: "Nome e email são obrigatórios" });
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Email inválido" });
    }
  
    next();
  };
  
  module.exports = {
    validateUser
  };