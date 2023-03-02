const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Dogs = require("./routesDog")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dog", Dogs)


module.exports = router;
