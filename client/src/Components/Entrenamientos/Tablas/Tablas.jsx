import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { textTransformation } from "../../Utils/TextTransformation";
import useTraining from "../../../Hooks/useTraining";
import { days } from "../../Utils/Options";
import styles from "./Tablas.module.css";

export default function Tablas({ preview }) {
  const { entrenamiento, cabecera } = useTraining();

  return (
    <div className={preview ? styles.body : styles.bodyOff}>
      <table id="tablaEntrenamientos" className="table">
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
            <th scope="col">Dia</th>
            <th scope="col">Bicicleta</th>
            <th scope="col">Calentamiento</th>
            <th scope="col">Ejercicio Especifico</th>
            <th scope="col">Descansos</th>
            <th scope="col">Rodada final</th>
            <th scope="col">Horas estimadas</th>
            <th scope="col">Tipo de entrenamiento</th>
            {cabecera.gimnasio.text === "Si" && <th>Gimnasio</th>}
          </tr>

          {/* ENTRENAMIENTO */}

          {days.map((day) => {
            return (
              <tr key={day.id}>
                <th scope="row" className={styles.days} width="7%">
                  {day.value}
                </th>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].bicicleta.text
                    )}
                  </p>
                </td>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].calentamiento.text
                    )}
                  </p>
                </td>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].ejercicio_especifico.text
                    )}
                  </p>
                </td>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].descansos.text
                    )}
                  </p>
                </td>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].rodada_final.text
                    )}
                  </p>
                </td>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].horas_estimadas.text
                    )}
                  </p>
                </td>
                <td>
                  <p className="font-monospace lh-1">
                    {textTransformation(
                      entrenamiento[day.value].tipo_entrenamiento.text
                    )}
                  </p>
                </td>
                {cabecera.gimnasio.text === "Si" && (
                  <td>
                    <p className="font-monospace lh-1">
                      {entrenamiento[day.value].gym.text}
                    </p>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
