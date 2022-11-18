import alumnos from "./Alumnos";
import entrenamiento from "./Entrenamiento";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  alumnos,
  entrenamiento,
});

export default rootReducer;
