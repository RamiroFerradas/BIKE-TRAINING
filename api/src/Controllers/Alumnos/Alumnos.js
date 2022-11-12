const axios = require("axios");
const e = require("express");
const { getAlumnos, getAlumnosName } = require("./getAlumnos");
const { Alumno } = require("../../db");

const getAllAlumnos = async (req, res) => {
  let { nombre, apellido } = req.query;

  try {
    nombre
      ? res.json(await getAlumnosName(nombre, apellido))
      : res.json(await getAlumnos());
  } catch (error) {
    console.error(error.message, "error en el pedido de alumnos");
  }
};
const postAlumno = async (req, res) => {
  let { nombre, apellido, email } = req.body;
  try {
    nombre = nombre[0].toUpperCase() + nombre.slice(1);
    apellido = apellido[0].toUpperCase() + apellido.slice(1);
    const alumno = await Alumno.create({
      nombre,
      apellido,
      email,
    });

    res.send("Alumno creado correctamente");
  } catch (error) {
    console.error(error.message, "error en el post de alumno");
  }
};

module.exports = {
  getAllAlumnos,
  postAlumno,
};
