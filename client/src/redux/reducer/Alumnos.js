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
    case "CLEAN_USER":
      return {
        ...state,
        usuario: {},
      };
    default:
      return state;
  }
}
