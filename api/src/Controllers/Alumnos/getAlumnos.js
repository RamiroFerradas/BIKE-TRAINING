const axios = require("axios");
const e = require("express");
const { Alumno, Entrenamiento } = require("../../db");
const { Op } = require("sequelize");

const getAlumnos = async () => {
  try {
    const alumnosDb = (
      await Alumno.findAll({
        order: ["nombre"],
        include: {
          model: Entrenamiento,
          // attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    ).map((ele) => ele.dataValues);

    if (alumnosDb.length) {
      console.log("Alumnos traidos de la db!");
      return alumnosDb;
    }
  } catch (error) {
    console.error(error.message, "error en en el pedido");
  }
};
const getAlumnosName = (async = (nombre, apellido) => {
  try {
    const alumno = Alumno.findOne({
      where: {
        nombre,
        apellido,
      },
    });
    return alumno;
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = { getAlumnos, getAlumnosName };
