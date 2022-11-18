import React, { createContext, useState } from "react";
import { textTransformation } from "../Components/Utils/TextTransformation";

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const [day, setDay] = useState({ text: "Lunes", error: false });

  const [cabecera, setCabecera] = useState({
    id: { text: "", error: false },
    planilla: { text: "", error: false },
    alumno: true,
    localidad: { text: "", error: false },
    horas_disponibles: { text: 0, error: false },
    objetivo: { text: "", error: false },
    categoria: { text: "", error: false },
    gimnasio: "false",
  });

  const [entrenamiento, setEntrenamiento] = useState({
    Lunes: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
    Martes: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
    Miercoles: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
    Jueves: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
    Viernes: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
    Sabado: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
    Domingo: {
      bicicleta: { text: "", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
      rodada_final: { text: "", error: false },
      horas_estimadas: { text: "", error: false },
      tipo_entrenamiento: { text: "", error: false },
      gym: { text: "", error: false },
    },
  });
  const handleChangueInput = (e) => {
    setEntrenamiento((state) => {
      return {
        ...state,
        [day.text]: {
          ...entrenamiento[day.text],
          [e.target.name]: { text: e.target.value, error: false },
        },
      };
    });
  };

  const handleChangueCabecera = (e) => {
    setCabecera((state) => {
      return {
        ...state,
        [e.target.name]: {
          text: textTransformation(e.target.value),
          error: false,
        },
      };
    });
  };

  const data = {
    entrenamiento,
    cabecera,
    setCabecera,
    handleChangueInput,
    day,
    setDay,
    handleChangueCabecera,
  };

  return (
    <TrainingContext.Provider value={data}>{children}</TrainingContext.Provider>
  );
};

export default TrainingContext;
