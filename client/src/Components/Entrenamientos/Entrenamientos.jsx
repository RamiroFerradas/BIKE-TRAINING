import React, { useEffect, useState } from "react";
import Cabecera from "./Cabecera/Cabecera";
import EntrenamientoForm from "./EntrenamientosForm/EntrenamientoForm";
import Tablas from "./Tablas/Tablas";
import styles from "./Entrenamientos.module.css";
import useSelected from "../../Hooks/useSelected";
import useTraining from "../../Hooks/useTraining";
import { useDispatch } from "react-redux";
import { updateALumno } from "../../redux/actions/alumnos";
import {
  postEntrenamiento,
  updateEntrenamiento,
} from "../../redux/actions/entrenamiento";
import useFetchUser from "../../Hooks/useFetchUser";

export default function Entrenamientos() {
  const dispatch = useDispatch();

  const { entrenamiento, cabecera } = useTraining();
  const { seleccionado, view } = useSelected();
  // console.log(seleccionado[0].entrenamiento[0].id);
  const handleEntrenamiento = () => {
    if (!seleccionado[0].entrenamientos[0].id) {
      dispatch(
        postEntrenamiento({ entrenamiento, alumno: cabecera.id.text.value })
      );
    } else {
      dispatch(
        updateEntrenamiento({
          entrenamiento,
          alumno: seleccionado[0]?.entrenamientos[0].id,
        })
      );
    }
  };

  return (
    <div className={styles.body}>
      <h3>CREA UN ENTRENAMIENTO</h3>
      <div className={styles.container}>
        <Cabecera />
      </div>
      {view && seleccionado[0]?.alumno && (
        <div>
          <EntrenamientoForm />
          <Tablas />
          <button onClick={handleEntrenamiento}>CARGAR ENTRENAMIENTO</button>
        </div>
      )}
    </div>
  );
}
