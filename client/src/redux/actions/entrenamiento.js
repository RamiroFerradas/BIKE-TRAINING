import axios from "axios";

export function postEntrenamiento(payload) {
  let { entrenamiento, alumno } = payload;

  return async function () {
    try {
      const res = await axios.post(`/entrenamientos/${alumno}`, entrenamiento, {
        alumno,
      });
      return res.data;
    } catch (error) {
      console.error(error.message, "error en el POST del usuario: actions");
    }
  };
}
export function updateEntrenamiento(payload) {
  let { entrenamiento, alumno } = payload;

  return async function () {
    try {
      const res = await axios.put(`/entrenamientos/${alumno}`, entrenamiento, {
        alumno,
      });
      return res.data;
    } catch (error) {
      console.error(error.message, "error en el PUT del usuario: actions");
    }
  };
}
