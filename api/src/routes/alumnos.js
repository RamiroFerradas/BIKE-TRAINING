const { Router } = require("express");

const {
  getAllAlumnos,
  postAlumno,
  deleteAlumno,
  updateAlumno,
} = require("../Controllers/Alumnos/Alumnos");
// const { getCountriesIdParams } = require("../Controllers/Alumnos");

const router = Router();

router.get("/", getAllAlumnos);
router.post("/", postAlumno);
router.put("/:id", updateAlumno);
router.delete("/:email", deleteAlumno);

module.exports = router;
