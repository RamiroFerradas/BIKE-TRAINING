const axios = require("axios");
const e = require("express");

const { Entrenamiento, Alumno } = require("../../db");

const getEntrenamientos = async (req, res) => {
  try {
    let entrenamiento = await Entrenamiento.findAll({
      order: ["id"],
      include: {
        model: Alumno,
        attributes: ["nombre", "apellido", "email"],
        through: {
          attributes: [],
        },
      },
    });

    res.json(entrenamiento);
  } catch (error) {
    console.log(error.message, "error en el pedido de activities a la db");
  }
};

const postEntrenamiento = async (req, res) => {
  let { id } = req.params;
  let { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = req.body;

  try {
    if (id) {
      const entrenamiento = await Entrenamiento.create({
        Lunes,
        Martes,
        Miercoles,
        Jueves,
        Viernes,
        Sabado,
        Domingo,
      });

      await entrenamiento.addUsuario(id);

      res.send("Entrenamiento creado correctamente");
    } else {
      res.send("Falta el id del alumno");
    }
  } catch (error) {
    console.error(error.message, "error en el post de alumno");
  }
};

const updateEntrenamiento = async (req, res) => {
  let { id } = req.params;
  let { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = req.body;

  try {
    if (id) {
      const entrenamientoUpdate = await Entrenamiento.update(
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

      res.send(
        `Entrenamiento actualizado con exito !!--->${entrenamientoUpdate}`
      );
    } else {
      res.send("Falta el id del alumno");
    }
  } catch (error) {
    console.log(error.message, "Error en el update");
  }
};

module.exports = {
  postEntrenamiento,
  getEntrenamientos,
  updateEntrenamiento,
};
