const initialState = {
  allAlumnos: [],
  usuario: {},
};

export default function alumnos(state = initialState, action) {
  switch (action.type) {
    case "GET_ALUMNOS":
      return {
        ...state,
        allAlumnos: action.payload,
      };
    case "GET_USER_EMAIL":
      return {
        ...state,
        usuario: action.payload,
      };
    default:
      return state;
  }
}
