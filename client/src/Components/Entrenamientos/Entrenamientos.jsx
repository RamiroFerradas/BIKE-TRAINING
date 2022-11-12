import React, { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Cabecera from "./Cabecera/Cabecera";
import EntrenamientoForm from "./EntrenamientosForm/EntrenamientoForm";
import Tablas from "./Tablas/Tablas";
import styles from "./Entrenamientos.module.css";

export default function Entrenamientos() {
  return (
    <div className={styles.body}>
      <h3>CREA UN ENTRENAMIENTO</h3>
      <div className={styles.container}>
        <Cabecera />
        <EntrenamientoForm />
      </div>

      <Tablas />
    </div>
  );
}
