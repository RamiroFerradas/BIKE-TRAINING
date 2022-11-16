const { Router } = require("express");

const {
  postEntrenamiento,
  getEntrenamientos,
  updateEntrenamiento,
} = require("../Controllers/Entrenamientos/Entrenamientos");
// const { getCountriesIdParams } = require("../Controllers/Alumnos");

const router = Router();

router.get("/", getEntrenamientos);
router.post("/:id", postEntrenamiento);
router.put("/:id", updateEntrenamiento);
// router.get("/:id", getCountriesIdParams);

module.exports = router;
