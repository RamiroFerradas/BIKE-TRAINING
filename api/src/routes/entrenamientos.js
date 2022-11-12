const { Router } = require("express");

const {
  postEntrenamiento,
} = require("../Controllers/Entrenamientos/Entrenamientos");
// const { getCountriesIdParams } = require("../Controllers/Alumnos");

const router = Router();

// router.get("/", getAllAlumnos);
router.post("/", postEntrenamiento);
// router.get("/:id", getCountriesIdParams);

module.exports = router;
