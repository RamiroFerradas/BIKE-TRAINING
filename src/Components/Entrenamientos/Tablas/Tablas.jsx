import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import useTraining from "../../../Hooks/useTraining";
import { days } from "../Options/Options";
import styles from "./Tablas.module.css";
import banerExcel from "../../../assets/banner excel.png";

export default function Tablas() {
  const { entrenamiento, cabecera } = useTraining();

  return (
    <div>
      <div>
        <table id="tablaEntrenamientos" className={styles.tabla}>
          <tbody>
            <td colSpan="5">
              <img
                src={banerExcel}
                alt="durandoTraining"
                className={styles.img}
              />
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
            </tr>

            {days.map((day) => {
              return (
                <tr>
                  <td className={styles.tableDays}> {day.value}</td>
                  <th>{entrenamiento[day.value].bicicleta.text}</th>
                  <th>{entrenamiento[day.value].calentamiento.text}</th>
                  <th>{entrenamiento[day.value].ejercicio_especifico.text}</th>
                  <th>{entrenamiento[day.value].descansos.text}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ReactHtmlTableToExcel
        // clasName={styles.buttonExcel}
        filename="prueba123"
        table="tablaEntrenamientos"
        sheet="pagina 1"
        buttonText="descargar excel"
      />
    </div>
  );
}
