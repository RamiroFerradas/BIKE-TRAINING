const { Router } = require("express");

const { getAllAlumnos, postAlumno } = require("../Controllers/Alumnos");
// const { getCountriesIdParams } = require("../Controllers/Alumnos");

const router = Router();

router.get("/", getAllAlumnos);
router.post("/", postAlumno);
// router.get("/:id", getCountriesIdParams);

module.exports = router;
