const axios = require("axios");
const e = require("express");

const { Entrenamiento } = require("../../db");

const postEntrenamiento = async (req, res) => {
  let { lunes, martes, miercoles, jueves, viernes, sabado, domingo, alumno } =
    req.body;
  console.log(req.body);
  try {
    const entrenamiento = await Entrenamiento.create({
      lunes,
      martes,
      miercoles,
      jueves,
      viernes,
      sabado,
      domingo,
    });
    await entrenamiento.addAlumno(alumno);
    console.log(entrenamiento);
    res.send("Entrenamiento creado correctamente");
  } catch (error) {
    console.error(error.message, "error en el post de alumno");
  }
};
module.exports = {
  postEntrenamiento,
};
