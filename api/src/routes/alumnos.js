const { Router } = require("express");

const {
  getAllAlumnos,
  postAlumno,
  updateAlumno,
} = require("../Controllers/Alumnos/Alumnos");
// const { getCountriesIdParams } = require("../Controllers/Alumnos");

const router = Router();

router.get("/", getAllAlumnos);
router.post("/", postAlumno);
router.put("/:id", updateAlumno);

module.exports = router;
