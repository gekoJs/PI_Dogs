const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const Dogs = require("./routesDog")
const Temperament = require("./routesTemperament")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", Dogs)
router.use("/temperaments", Temperament)


module.exports = router;
