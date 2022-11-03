import React, { createContext, useState } from "react";

const TrainingContext = createContext();

const TrainingProvider = ({ children }) => {
  const [cabecera, setCabecera] = useState({
    alumno: { text: "", error: false },
    localidad: { text: "", error: false },
    horas_disponibles: { text: null, error: false },
    objetivo: { text: "", error: false },
    categoria: { text: "", error: false },
    gimnasio: { text: "", error: false },
  });

  const [entrenamiento, setEntrenamiento] = useState({
    Lunes: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Martes: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Miercoles: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Jueves: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Viernes: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Sabado: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Domingo: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
  });

  const data = {
    entrenamiento,
    setEntrenamiento,
    cabecera,
    setCabecera,
  };

  return (
    <TrainingContext.Provider value={data}>{children}</TrainingContext.Provider>
  );
};
export { TrainingProvider };
export default TrainingContext;
