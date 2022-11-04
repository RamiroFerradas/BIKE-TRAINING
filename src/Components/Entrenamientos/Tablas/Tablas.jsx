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
      <table id="tablaEntrenamientos" className={styles.tabla}>
        <tbody>
          {/* CABECERA */}
          <tr>
            <td colSpan="8">
              {/* <tr colSpan="10">
                <img
                  src="https://i.ibb.co/ynV5wLP/banner-excel.png"
                  alt="durandoTraining"
                  className={styles.img}
                />
              </tr> */}

              <div className={styles.cabecera1}>
                <span>Alumno: {cabecera.alumno.text}</span>
                <span>Localidad: {cabecera.localidad.text}</span>
              </div>
              <div className={styles.cabecera1}>
                <span>
                  Horas Disponibles: {cabecera.horas_disponibles.text}
                </span>
                <span>Objetivo: {cabecera.objetivo.text}</span>
                <span>Categoria: {cabecera.categoria.text}</span>
                <span>Gimnasio: {cabecera.gimnasio.text}</span>
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
