import React, { createContext, useState } from "react";

const TrainingContext = createContext();

export const TrainingProvider = ({ children }) => {
  const [day, setDay] = useState({ text: "Lunes", error: false });

  const [cabecera, setCabecera] = useState({
    planilla: { text: "", error: false },
    alumno: { text: "", error: false },
    localidad: { text: "", error: false },
    horas_disponibles: { text: null, error: false },
    objetivo: { text: "", error: false },
    categoria: { text: "", error: false },
    gimnasio: { text: "No", error: false },
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
  const handleDays = (e) => {
    setDay({ text: e.target.value, error: false });
    document.getElementById("myForm").reset();
  };

  const data = {
    entrenamiento,
    cabecera,
    setCabecera,
    handleChangueInput,
    handleDays,
    day,
    setDay,
  };

  return (
    <TrainingContext.Provider value={data}>{children}</TrainingContext.Provider>
  );
};

export default TrainingContext;
