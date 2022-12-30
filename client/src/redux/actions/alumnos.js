import axios from "axios";

export function fetchAlumnos() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_ALUMNOS",
        payload: (await axios(`/alumnos`)).data,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de todos los todos los usuarios: actions"
      );
    }
  };
}
export function postAlumno(payload) {
  return async function () {
    try {
      return await axios.post(`/alumnos`, payload).data;
    } catch (error) {
      console.error(error.message, "error en el post del usuario: actions");
    }
  };
}
export function fetchUsuario(email) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "GET_USER_EMAIL",
        payload: (await axios(`/alumnos?email=${email}`)).data,
      });
    } catch (error) {
      console.error(
        error.message,
        "error en el pedido de usuario por email: actions"
      );
    }
  };
}

export function updateALumno(payload) {
  console.log(payload);
  return async function () {
    try {
      const res = await axios.put(`/alumnos/${payload.id.text.value}`, payload);
      return res.data;
    } catch (error) {
      console.error(error.message, "error en el post del usuario: actions");
    }
  };
}
