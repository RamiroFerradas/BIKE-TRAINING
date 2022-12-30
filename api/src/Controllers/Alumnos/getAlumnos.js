const axios = require("axios");
const e = require("express");
const { Usuario, Entrenamiento } = require("../../db");
const { Op } = require("sequelize");

const getAlumnos = async () => {
  try {
    const alumnosDb = (
      await Usuario.findAll({
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
    console.log(alumnosDb);
    if (alumnosDb.length) {
      console.log("Alumnos traidos de la db!");
      return alumnosDb;
    }
  } catch (error) {
    console.error(error.message, "error en en el pedido");
  }
};

const getAlumnosName = async (nombre, apellido) => {
  try {
    const alumno = await Usuario.findOne({
      where: {
        nombre,
        apellido,
      },
    });
    return alumno;
  } catch (error) {
    console.error(error.message);
  }
};
const getAlumnosEmail = async (email) => {
  try {
    const alumno = await Usuario.findOne({
      where: {
        email,
      },
      include: {
        model: Entrenamiento,
        // attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    if (alumno) {
      return alumno;
    } else {
      throw new Error("No existe usuario con ese email");
    }
  } catch (error) {
    console.log(error.message, "error en el pedido por email");
  }
};

module.exports = { getAlumnos, getAlumnosName, getAlumnosEmail };
