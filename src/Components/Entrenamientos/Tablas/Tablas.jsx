import React from "react";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import { days } from "../Options/Options";

export default function Tablas({ entrenamiento }) {
  console.log(entrenamiento);
  return (
    <div>
      <div>
        <table id="tablaEntrenamientos">
          <thead>
            <tr>
              <th>Dia</th>
              <th>fecha</th>
              <th>asd</th>
              <th>sadsadasdsad</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => {
              return (
                <tr>
                  {day.value}
                  {/* <th> {entrenamiento?.Lunes.bicicleta}</th> */}
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
