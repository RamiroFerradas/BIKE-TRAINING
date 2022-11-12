import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import useTraining from "../../../Hooks/useTraining";
import { days } from "../Utils/Options";
import styles from "./Tablas.module.css";
import { textTransformation } from "../Utils/TextTransformation";

export default function Tablas() {
  const { entrenamiento, cabecera } = useTraining();

  return (
    <div className={styles.body}>
      <table id="tablaEntrenamientos" className={styles.tabla}>
        <tbody>
          {/* CABECERA */}
          <tr>
            <td colSpan="9">
              {/* <table width="100%" className={styles.tableImg}>
                <tr>
                  <img
                    src="https://i.ibb.co/ynV5wLP/banner-excel.png"
                    alt="durandoTraining"
                    className={styles.img}
                  />
                </tr>
              </table> */}

              <div className={styles.cabecera1}>
                <p>
                  <span>Alumno: </span>
                  {textTransformation(cabecera.alumno.text)}
                </p>
                <p>
                  <span>Localidad: </span>
                  {textTransformation(cabecera.localidad.text)}
                </p>
              </div>
              <div className={styles.cabecera1}>
                <p>
                  <span>
                    Horas disponibles:
                    {cabecera.horas_disponibles.text}
                  </span>
                </p>
                <p>
                  <span>Objetivo: </span>
                  {textTransformation(cabecera.objetivo.text)}
                </p>
                <p>
                  <span>Categoria: </span>
                  {textTransformation(cabecera.categoria.text)}
                </p>
                <p>
                  <span>Gimnasio: </span>
                  {textTransformation(cabecera.gimnasio.text)}
                </p>
              </div>
            </td>
          </tr>

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
              <tr key={day.id}>
                <td className={styles.days} width="7%">
                  {day.value}
                </td>
                <th>
                  {textTransformation(entrenamiento[day.value].bicicleta.text)}
                </th>
                <th>
                  {textTransformation(
                    entrenamiento[day.value].calentamiento.text
                  )}
                </th>
                <th>
                  {textTransformation(
                    entrenamiento[day.value].ejercicio_especifico.text
                  )}
                </th>
                <th>
                  {textTransformation(entrenamiento[day.value].descansos.text)}
                </th>
                <th>
                  {textTransformation(
                    entrenamiento[day.value].rodada_final.text
                  )}
                </th>
                <th>
                  {textTransformation(
                    entrenamiento[day.value].horas_estimadas.text
                  )}
                </th>
                <th>
                  {textTransformation(
                    entrenamiento[day.value].tipo_entrenamiento.text
                  )}
                </th>
                {cabecera.gimnasio.text === "Si" && (
                  <th>{entrenamiento[day.value].gym.text}</th>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

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