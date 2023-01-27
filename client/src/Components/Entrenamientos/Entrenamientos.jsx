import React, { useEffect, useRef, useState } from "react";
import Cabecera from "./Cabecera/Cabecera";
import EntrenamientoForm from "./EntrenamientosForm/EntrenamientoForm";
import Tablas from "./Tablas/Tablas";
import styles from "./Entrenamientos.module.css";
import useSelected from "../../Hooks/useSelected";
import useTraining from "../../Hooks/useTraining";
import { useDispatch, useSelector } from "react-redux";
import { updateALumno } from "../../redux/actions/alumnos";
import {
  postEntrenamiento,
  updateEntrenamiento,
} from "../../redux/actions/entrenamiento";
import useFetchUser from "../../Hooks/useFetchUser";
import { Button, Container, Form } from "react-bootstrap";
import ReactHtmlTableToExcel from "react-html-table-to-excel";
import NavBar from "../NavBar/NavBar";
import { days } from "../Utils/Options";
import Swal from "sweetalert2";
import VentanaModal from "../VentanaModal/VentanaModal";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../../Hooks/useLocalStorage";

export default function Entrenamientos() {
  const dispatch = useDispatch();
  const selectRef = useRef();

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
  const input7 = useRef();
  const input8 = useRef();

  const { entrenamiento, cabecera } = useTraining();
  const { seleccionado, view, setSeleccionado } = useSelected();
  const { state } = useLocation();
  const [selected, setSelected] = useLocalStorage("userSelected", []);

  const [preview, setPreview] = useState(false);
  const handleEntrenamiento = () => {
    try {
      if (!seleccionado[0].entrenamientos[0]?.id) {
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
      Swal.fire({
        icon: "success",
        title: `Entrenamiento para ${seleccionado[0]?.nombre} ${seleccionado[0]?.apellido} cargado correctamente`,
        showConfirmButton: false,
        timer: 2000,
      });
      selectRef.current.clearValue();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `No se pudo cargar el entrenamiento, intente neuvamente`,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  // const handleChangeSelect = (e) => {
  //   setDayTable(e.target.value);
  // };

  return (
    <div className={styles.body}>
      <Cabecera
        selectRef={selectRef}
        input1={input1}
        input2={input2}
        input3={input3}
        input4={input4}
        input5={input5}
        input6={input6}
        input7={input7}
        input8={input8}
      />
      {view && seleccionado[0]?.alumno && (
        <>
          <p className="display-4 text-light  p-2  text-center">
            <strong>CREA UN ENTRENAMIENTO</strong>
          </p>
          <EntrenamientoForm
            input1={input1}
            input2={input2}
            input3={input3}
            input4={input4}
            input5={input5}
            input6={input6}
            input7={input7}
            input8={input8}
          />
          <Container fluid>
            <Button variant="warning" onClick={() => setPreview(!preview)}>
              <span>{!preview ? `Vista previa` : `Cerrar vista previa`}</span>
            </Button>
            {/* {preview && (
              <Form.Select
                size="lg"
                className="mt-3 p-2"
                aria-label="Default select example"
                onChange={handleChangeSelect}
              >
                {days?.map((e) => {
                  return (
                    <option
                      className="d-flex text-center "
                      key={e.id}
                      value={e.value}
                    >
                      <span> {e.value}</span>
                    </option>
                  );
                })}
              </Form.Select>
            )} */}
            <Tablas preview={preview} />

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
              Cargar entrenamiento
            </Button>
          </Container>
        </>
      )}
    </div>
  );
}
