import React, { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Cabecera from "./Cabecera/Cabecera";
import EntrenamientoForm from "./EntrenamientosForm/EntrenamientoForm";
import Tablas from "./Tablas/Tablas";

export default function Entrenamientos() {
  const [input, setInput] = useState({
    alumno: { text: "", error: false },
    localidad: { text: "", error: false },
    horas_disponibles: { text: null, error: false },
    objetivo: { text: "", error: false },
    categoria: { text: "", error: false },
  });

  const [entrenamiento, setEntrenamiento] = useState({
    Lunes: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Martes: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Miercoles: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Jueves: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Viernes: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Sabado: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
    Domingo: {
      bicicleta: { text: "MTB", error: false },
      calentamiento: { text: "", error: false },
      ejercicio_especifico: { text: "", error: false },
      descansos: { text: "", error: false },
    },
  });

  return (
    <div>
      <h3>CREA UN ENTRENAMIENTO</h3>
      <Cabecera />
      <br />
      <EntrenamientoForm />
      <br />
      <Tablas entrenamiento={entrenamiento} />
    </div>
  );
}
