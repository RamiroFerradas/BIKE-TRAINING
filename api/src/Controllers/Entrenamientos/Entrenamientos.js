const axios = require("axios");
const e = require("express");

const { Entrenamiento } = require("../../db");
const Alumno = require("../../models/Alumno");

const getEntrenamientos = async (req, res) => {
  try {
    let entrenamiento = await Entrenamiento.findAll({
      order: ["id"],
      include: {
        model: Alumno,
        attributes: ["nombre", "apellido"],
      },
    });

    // let result = entrenamiento.map((ele) => getActivitiesModel(ele));

    res.json(entrenamiento);
  } catch (error) {
    console.log(error.message, "error en el pedido de activities a la db");
  }
};

const postEntrenamiento = async (req, res) => {
  let { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo, alumno } =
    req.body;
  console.log(req.body);
  try {
    if (alumno) {
      const entrenamiento = await Entrenamiento.create({
        Lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo,
      });
      await entrenamiento.addAlumno(alumno);

      res.send("Entrenamiento creado correctamente");
    } else {
      res.send("Falta el id del alumno");
    }
  } catch (error) {
    console.error(error.message, "error en el post de alumno");
  }
};

const updateEntrenamiento = async (req, res) => {
  console.log("DSFSDF");
  let { id } = req.params;
  let { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = req.body;
  try {
    const entrenamiento = await Entrenamiento.update(
      {
        Lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo,
      },

      {
        where: {
          id,
        },
      }
    );

    console.log(entrenamiento, "holis update activity");

    console.log(`Actualizaste ${entrenamiento} actividad !`);
    res.send("Entrenamiento actualizado con exito !!");
  } catch (error) {
    console.log(error.message, "Error en el update");
  }
};

module.exports = {
  postEntrenamiento,
  getEntrenamientos,
  updateEntrenamiento,
};
