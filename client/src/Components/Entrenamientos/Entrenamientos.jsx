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
import { Button, Container } from "react-bootstrap";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import NavBar from "../NavBar/NavBar";

// ReactHTMLTableToExcel.format = (s, c) => {
//   if (c && c["table"]) {
//     const html = c.table;
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     const rows = doc.querySelectorAll("tr");

//     for (const row of rows) row.removeChild(row.firstChild);

//     c.table = doc.querySelector("table").outerHTML;
//   }

//   return s.replace(/{(\w+)}/g, (m, p) => c[p]);
// };

export default function Entrenamientos() {
  const dispatch = useDispatch();

  const { entrenamiento, cabecera } = useTraining();
  const { seleccionado, view } = useSelected();

  const [preview, setPreview] = useState(false);
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
      {view && seleccionado[0]?.alumno && (
        <>
          <p className="display-4 text-light  p-2  text-center">
            <strong>CREA UN ENTRENAMIENTO</strong>
          </p>
          <EntrenamientoForm />
          <Container fluid>
            <Button variant="warning" onClick={() => setPreview(!preview)}>
              <span>{!preview ? `VISTA PREVIA` : `CERRAR VISTA PREVIA`}</span>
            </Button>
            {<Tablas preview={preview} />}

            <ReactHtmlTableToExcel
              className="btn btn-success"
              filename={
                `${cabecera.planilla.text}` || "Durando_Training" + `.xlsx`
              }
              table="tablaEntrenamientos"
              sheet="pagina 1"
              buttonText="Descargar excel"
            />
            <Button
              className="pl-4"
              variant="warning"
              onClick={handleEntrenamiento}
            >
              CARGAR ENTRENAMIENTO
            </Button>
          </Container>
        </>
      )}
    </div>
  );
}
