import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
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
import { categorias, provincias } from "../../Utils/Options";
import { useLocation } from "react-router-dom";
import useLocalStorage from "../../../Hooks/useLocalStorage";
import Loader from "../../Loader/Loader";

export default function Cabecera({
  selectRef,
  // input1,
  // input2,
  // input3,
  // input4,
  // input5,
  // input6,
  // input7,
  // input8,
}) {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const { alumnos } = useFetchAlumnos();
  const { cabecera, setCabecera, handleChangueCabecera } = useTraining();
  const [selected, setSelected] = useLocalStorage("userSelected", []);
  const { seleccionado, isLoading } = useSelected(selected);
  const { pathname, state } = useLocation();
  const refNombre = useRef();
  const refApellido = useRef();

  const [disabled, setDisabled] = useState(false);
  const [editButton, setEditButton] = useState(false);

  const optionsAlumnos = alumnos?.map((e) => {
    return {
      value: e.id,
      label: e.nombre && e.apellido ? `${e.nombre} ${e.apellido}` : e.email,
    };
  });
  const optionsProvincias = provincias?.map((e) => {
    return {
      value: e.id,
      label: e.label,
    };
  });

  const [defaultvalue, setDefaultValue] = useState();
  useEffect(() => {
    if (state?.prevPathname == "/alumnos") {
      const defaultvalue = seleccionado?.map(({ nombre, apellido, id }) => {
        return {
          value: id,
          label: nombre + " " + apellido,
        };
      });

      setDefaultValue(defaultvalue);
    }
  }, [selected, seleccionado]);
  useEffect(() => {
    if (selected) {
      setCabecera({ ...cabecera, id: { error: false } });
    }
  }, [selected]);
  useEffect(() => {
    if (cabecera.id.text === "" || cabecera.id.text === null) {
      setCabecera({ ...cabecera, id: { error: true } });
    }
    if (cabecera.nombre.text === "" || cabecera.nombre.text === null) {
      setCabecera({ ...cabecera, nombre: { error: true } });
    }
    if (cabecera.apellido.text === "" || cabecera.apellido.text === null) {
      setCabecera({ ...cabecera, apellido: { error: true } });
    }

    !seleccionado[0]?.alumno ? setDisabled(false) : setDisabled(true);
  }, [cabecera.id, cabecera.nombre, cabecera.apellido, seleccionado[0]]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateALumno(cabecera));
    setTimeout(() => {
      dispatch(fetchUsuario());
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
  const onChangueProv = (e) => {
    setCabecera({
      ...cabecera,
      provincia: { text: e, error: false },
    });
  };

  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (cabecera?.id?.text?.label?.includes("@" || ".com")) {
      if (refNombre.current?.value && refApellido.current?.value) {
        setDisableButton(false);
      } else {
        setDisableButton(true);
      }
    } else {
      setDisableButton(false);
    }
  }, [cabecera.id, refNombre.current?.value, refApellido.current?.value]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.body}>
      <form action="">
        <FieldInput
          field={cabecera.id}
          id="id"
          text="Alumno:"
          textWrong="Selecciona un alumno"
        >
          <Select
            ref={selectRef}
            disabled={disabled}
            closeMenuOnSelect={true}
            components={animatedComponents}
            // value={selectedOption}
            defaultValue={defaultvalue}
            options={optionsAlumnos}
            isClearable
            onChange={onChangueNombre}
            isSearchable
            placeholder="Selecciona un alumno"
          />
        </FieldInput>

        {cabecera.id.text && (
          <>
            {!seleccionado[0]?.nombre && (
              <FieldInput
                field={cabecera.nombre}
                id="nombre"
                text="Nombre:"
                textWrong="Ingrese el nombre del alumno"
              >
                <input
                  type="text"
                  name="nombre"
                  ref={refNombre}
                  onChange={handleChangueCabecera}
                />
              </FieldInput>
            )}

            {!seleccionado[0]?.apellido && (
              <FieldInput
                field={cabecera.apellido}
                id="apellido"
                text="Apellido:"
                textWrong="Ingrese el apellido del alumno"
              >
                <input
                  ref={refApellido}
                  type="text"
                  name="apellido"
                  onChange={handleChangueCabecera}
                />
              </FieldInput>
            )}
          </>
        )}

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
          field={cabecera.provincia}
          id="provincia"
          text="Provincia:"
          textWrong=""
        >
          {/* <Select
            disabled={disabled}
            closeMenuOnSelect={true}
            components={animatedComponents}
            // value={selectedOption}
            options={optionsProvincias}
            isClearable
            onChange={onChangueProv}
            isSearchable
            placeholder="Selecciona una provincia"
            name="provincia"
            value={[
              {
                label: seleccionado.length
                  ? seleccionado[0]?.provincia
                  : "Seleccionar",
                value: seleccionado[0]?.provincia,
              },
            ]}
          /> */}
          <input
            disabled={disabled}
            type="text"
            name="provincia"
            onChange={handleChangueCabecera}
            defaultValue={seleccionado.length ? seleccionado[0]?.provincia : ""}
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
          <select
            disabled={disabled}
            name="categoria"
            defaultValue={seleccionado.length ? seleccionado[0]?.categoria : ""}
            onChange={(e) => {
              setCabecera({ ...cabecera, categoria: e.target.value });
            }}
          >
            {categorias?.map((e) => {
              return <option key={e.id}>{e.label}</option>;
            })}
          </select>
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
        <FieldInput
          field={cabecera.planilla}
          id="planilla"
          text="Nombre de planilla:"
          textWrong="Ingrese un nombre para la planilla"
        >
          <input type="text" name="planilla" onChange={handleChangueCabecera} />
        </FieldInput>
      </form>
      <Container fluid className="d-flex justify-content-center w-25 p-3">
        {seleccionado[0]?.alumno && (
          <>
            {disabled ? (
              <Button
                className="me-3"
                variant="warning"
                onClick={handleEditAlumno}
              >
                EDITAR ALUMNO
              </Button>
            ) : (
              <Button onClick={() => setDisabled(!disabled)}>CANCELAR</Button>
            )}
          </>
        )}
        {!seleccionado.length ? (
          <></>
        ) : (
          <Button
            disabled={disableButton}
            variant={!disableButton ? "success" : "danger"}
            onClick={handleEdit}
          >
            {!seleccionado[0]?.alumno ? `CARGAR ALUMNO` : `GUARDAR`}
          </Button>
        )}
      </Container>
    </div>
  );
}
