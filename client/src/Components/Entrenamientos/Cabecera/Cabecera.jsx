import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTraining from "../../../Hooks/useTraining";
import FieldInput from "../Field/FieldInput";
import styles from "./Cabecera.module.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  fetchAlumnos,
  fetchUsuario,
  updateALumno,
} from "../../../redux/actions/alumnos";
import useFetchAlumnos from "../../../Hooks/useFetchAlumnos";
import useSelected from "../../../Hooks/useSelected";
import { useAuth0 } from "@auth0/auth0-react";
import useFetchUser from "../../../Hooks/useFetchUser";
import { Button, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cabecera() {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const { seleccionado } = useSelected();
  const { alumnos } = useFetchAlumnos();
  const { user } = useAuth0();
  const { cabecera, setCabecera, handleChangueCabecera } = useTraining();
  console.log(alumnos);

  const [disabled, setDisabled] = useState(false);
  const [editButton, setEditButton] = useState(false);

  const options = alumnos?.map((e) => {
    return {
      value: e.id,
      label: `${e.nombre} ${e.apellido}`,
    };
  });
  useEffect(() => {
    if (cabecera.id.text === "" || cabecera.id.text === null) {
      setCabecera({ ...cabecera, id: { error: true } });
    }
    !seleccionado[0]?.alumno ? setDisabled(false) : setDisabled(true);
  }, [cabecera.id, seleccionado[0]]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateALumno(cabecera));
    setTimeout(() => {
      dispatch(fetchUsuario(user.email));
      dispatch(fetchAlumnos());
    }, 200);
  };
  const handleEditAlumno = (e) => {
    e.preventDefault();
    setEditButton(true);
    setDisabled(!disabled);
  };

  const onChangueNombre = (e) => {
    setCabecera({
      ...cabecera,
      id: { text: e, error: false },
    });
  };
  return (
    <div className={styles.body}>
      <form action="">
        <FieldInput
          field={cabecera.planilla}
          id="planilla"
          text="Nombre de planilla:"
          textWrong="Ingrese un nombre para la planilla"
        >
          <input type="text" name="planilla" onChange={handleChangueCabecera} />
        </FieldInput>
        <FieldInput
          field={cabecera.id}
          id="id"
          text="Alumno:"
          textWrong="Selecciona un alumno"
        >
          <Select
            disabled={disabled}
            closeMenuOnSelect={true}
            components={animatedComponents}
            // value={selectedOption}
            options={options}
            isClearable
            onChange={onChangueNombre}
            isSearchable
            placeholder="Selecciona un alumno"
          />
        </FieldInput>
        <FieldInput
          field={cabecera.localidad}
          id="localidad"
          text="Localidad:"
          textWrong=""
        >
          <input
            disabled={disabled}
            type="text"
            name="localidad"
            onChange={handleChangueCabecera}
            defaultValue={seleccionado.length ? seleccionado[0]?.localidad : ""}
          />
        </FieldInput>
        <FieldInput
          field={cabecera.horas_disponibles}
          id="horas_disponibles"
          text="Horas Disponibles:"
          textWrong=""
        >
          <input
            disabled={disabled}
            type="number"
            name="horas_disponibles"
            onChange={handleChangueCabecera}
            defaultValue={
              seleccionado.length ? seleccionado[0]?.horas_disponibles : "0"
            }
          />
        </FieldInput>
        <FieldInput
          field={cabecera.objetivo}
          id="objetivo"
          text="Objetivo:"
          textWrong=""
        >
          <input
            disabled={disabled}
            type="text"
            name="objetivo"
            onChange={handleChangueCabecera}
            defaultValue={seleccionado.length ? seleccionado[0]?.objetivo : ""}
          />
        </FieldInput>
        <FieldInput
          field={cabecera.categoria}
          id="categoria"
          text="Categoria:"
          textWrong=""
        >
          <input
            disabled={disabled}
            type="text"
            name="categoria"
            onChange={handleChangueCabecera}
            defaultValue={seleccionado.length ? seleccionado[0]?.categoria : ""}
          />
        </FieldInput>
        <FieldInput
          field={cabecera.gimnasio}
          id="gimnasio"
          text="Gimnasio:"
          textWrong=""
        >
          <select
            disabled={disabled}
            name="gimnasio"
            defaultValue={seleccionado.length ? seleccionado[0]?.gimnasio : ""}
            onChange={(e) => {
              setCabecera({ ...cabecera, gimnasio: e.target.value });
            }}
          >
            <option value={"false"}>No</option>
            <option value={"true"}>Si</option>
          </select>
        </FieldInput>
        <div>
          {seleccionado[0]?.alumno && (
            <>
              {disabled ? (
                <Button variant="warning" onClick={handleEditAlumno}>
                  EDITAR ALUMNO
                </Button>
              ) : (
                <Button onClick={() => setDisabled(false)}>CANCELAR</Button>
              )}
            </>
          )}
          {!seleccionado.length ? (
            <></>
          ) : (
            <Button variant="success" onClick={handleEdit}>
              {!seleccionado[0]?.alumno ? `CARGAR ALUMNO` : `GUARDAR`}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
