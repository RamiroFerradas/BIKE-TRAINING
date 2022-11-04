import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import useTraining from "../../../Hooks/useTraining";
import { days } from "../Options/Options";
import styles from "./Tablas.module.css";
import banerExcel from "../../../assets/banner excel.png";

export default function Tablas() {
  const { entrenamiento, cabecera } = useTraining();

  return (
    <div className={styles.body}>
      <div>
        <table id="tablaEntrenamientos" className={styles.tabla}>
          <tbody>
            {/* CABECERA */}
            <td colSpan="8">
              {/* <tr colSpan="10">
                <img
                  src="https://i.ibb.co/ynV5wLP/banner-excel.png"
                  alt="durandoTraining"
                  className={styles.img}
                />
              </tr> */}

              <div className={styles.cabecera1}>
                <p>Alumno: {cabecera.alumno.text}</p>
                <p>Localidad: {cabecera.localidad.text}</p>
              </div>
              <div className={styles.cabecera1}>
                <p>Horas Disponibles: {cabecera.horas_disponibles.text}</p>
                <p>Objetivo: {cabecera.objetivo.text}</p>
                <p>Categoria: {cabecera.categoria.text}</p>
                <p>Gimnasio: {cabecera.gimnasio.text}</p>
              </div>
            </td>
            <tr className={styles.tableHead}>
              <td>Dia</td>
              <th>Bicicleta</th>
              <th>Calentamiento</th>
              <th>Ejercicio Especifico</th>
              <th>Descansos</th>
              <th>Rodada final</th>
              <th>Horas estimadas</th>
              <th>Tipo de entrenamiento</th>
              {cabecera.gimnasio.text === "Si" && <th>Gimnasio</th>}
            </tr>
            {/* ENTRENAMIENTO */}
            {days.map((day) => {
              return (
                <tr>
                  <td width="6%"> {day.value}</td>
                  <th>{entrenamiento[day.value].bicicleta.text}</th>
                  <th>{entrenamiento[day.value].calentamiento.text}</th>
                  <th>{entrenamiento[day.value].ejercicio_especifico.text}</th>
                  <th>{entrenamiento[day.value].descansos.text}</th>
                  <th>{entrenamiento[day.value].rodada_final.text}</th>
                  <th>{entrenamiento[day.value].horas_estimadas.text}</th>
                  <th>{entrenamiento[day.value].tipo_entrenamiento.text}</th>
                  {cabecera.gimnasio.text === "Si" && (
                    <th>{entrenamiento[day.value].gym.text}</th>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ReactHtmlTableToExcel
        className={styles.buttonExcel}
        filename={`${cabecera.planilla.text}` || "Durando_Training"}
        table="tablaEntrenamientos"
        sheet="pagina 1"
        buttonText="Descargar excel"
      />
    </div>
  );
}
