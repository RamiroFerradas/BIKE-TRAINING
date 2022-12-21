const axios = require("axios");
const e = require("express");
const { getAlumnos, getAlumnosName, getAlumnosEmail } = require("./getAlumnos");
const { Usuario } = require("../../db");
const { textTransformation } = require("../../Utils/textTransformation");

const getAllAlumnos = async (req, res) => {
  let { nombre, apellido, email } = req.query;

  nombre = textTransformation(nombre);
  apellido = textTransformation(apellido);
  email = email?.toLowerCase();
  try {
    if (nombre || email) {
      nombre
        ? res.json(await getAlumnosName(nombre, apellido))
        : res.json(await getAlumnosEmail(email));
    } else {
      res.json(await getAlumnos());
    }
  } catch (error) {
    console.error(error.message, "error en el pedido de alumnos");
  }
};

const postAlumno = async (req, res) => {
  let { given_name, family_name, email } = req.body;
  try {
    family_name = textTransformation(family_name);
    email = email?.toLowerCase();
    const [row, created] = await Usuario.findOrCreate({
      where: {
        email,
      },
      defaults: {
        nombre: textTransformation(given_name),
        apellido: textTransformation(family_name),
        entrenador: email === "ramiferra97@gmail.com" && true,
      },
    });

    if (!created) {
      throw new Error("El usuario ya existe");
    } else {
      res.send(row);
      return "Usuario creador correctamente!";
    }
  } catch (error) {
    console.error(error.message, "error en el post de alumno");
  }
};
const deleteAlumno = async (req, res) => {
  try {
    const { email } = req.params;
    const alumnoId = await Usuario.findOne({
      where: { email },
    });
    if (alumnoId) {
      await Usuario.destroy({
        where: { email },
      });
      console.log(`Usuario '${alumnoId.nombre}' borrado con exito`);
      res.json(`Usuario '${alumnoId.nombre}' borrado con exito`);
    } else {
      res.json("El alumno fue eliminado");
    }
  } catch (error) {
    console.error(error.message, "error en el post de alumno");
  }
};

const updateAlumno = async (req, res) => {
  let { id } = req.params;
  let {
    localidad,
    horas_disponibles,
    categoria,
    objetivo,
    gimnasio,
    alumno,
    entrenador,
  } = req.body;
  console.log(req.body);
  try {
    if (gimnasio) {
      if (gimnasio.text === "false") {
        gimnasio = false;
      } else {
        gimnasio = true;
      }
    }

    const usuario = await Usuario.update(
      {
        localidad: textTransformation(localidad.text),
        horas_disponibles: textTransformation(horas_disponibles.text),
        categoria: textTransformation(categoria.text),
        objetivo: textTransformation(objetivo.text),
        gimnasio,
        alumno,
        entrenador,
      },

      {
        where: {
          id,
        },
      }
    );

    res.send(`Alumno actualizado con exito !!--->${usuario}`);
  } catch (error) {
    console.log(error.message, "Error en el update");
  }
};

module.exports = {
  getAllAlumnos,
  postAlumno,
  deleteAlumno,
  updateAlumno,
};
