import React, { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import styles from "./EntrenamientoForm.module.css";

export default function EntrenamientoForm() {
  const [input, setInput] = useState({
    alumno: {},
    localidad: {},
    horas_disponibles: {},
    objetivo: {},
    alumno: {},
    categoria: {},
    bicicleta: {},
    calentamiento: {},
    ejercicio_especifico: {},
    descansos: {},
  });

  const handleChangeEntrenamiento = (e) => {
    e.preventDefault();
    setEntrenamientoTitle({
      ...entrenamientoTitle,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h3>CREA UN ENTRENAMIENTO</h3>
      {/* <div>
        <ReactHTMLTableToExcel
          clasName={styles.buttonExcel}
          filename={entrenamientoTitle}
          table="tablaEntrenamientos"
        />
      </div> */}
      <div>
        <table id="tablaEntrenamientos">
          <input
            type="text"
            name="entrenamientoTitle"
            onChange={handleChangeEntrenamiento}
          />
        </table>
      </div>
    </div>
  );
}
