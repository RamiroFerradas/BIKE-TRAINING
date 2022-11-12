const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const alumnos = require("../routes/alumnos");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/alumnos", alumnos);

module.exports = router;
