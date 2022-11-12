import React from "react";
import useTraining from "../../../Hooks/useTraining";
import FieldInput from "../Field/FieldInput";
import styles from "./Cabecera.module.css";

export default function Cabecera() {
  const { cabecera, setCabecera } = useTraining();

  const handleChangueInput = (e) => {
    console.log(e.target.value);
    setCabecera((state) => {
      return {
        ...state,
        [e.target.name]: { text: e.target.value, error: false },
      };
    });
  };

  return (
    <div className={styles.body}>
      <form action="">
        <FieldInput
          field={cabecera.planilla}
          id="planilla"
          text="Nombre de planilla:"
          textWrong=""
        >
          <input type="text" name="planilla" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={cabecera.alumno}
          id="alumno"
          text="Alumno:"
          textWrong=""
        >
          <input type="text" name="alumno" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={cabecera.localidad}
          id="localidad"
          text="Localidad:"
          textWrong=""
        >
          <input type="text" name="localidad" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={cabecera.horas_disponibles}
          id="horas_disponibles"
          text="Horas Disponibles:"
          textWrong=""
        >
          <input
            type="number"
            name="horas_disponibles"
            onChange={handleChangueInput}
          />
        </FieldInput>
        <FieldInput
          field={cabecera.objetivo}
          id="objetivo"
          text="Objetivo:"
          textWrong=""
        >
          <input type="text" name="objetivo" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={cabecera.categoria}
          id="categoria"
          text="Categoria:"
          textWrong=""
        >
          <input type="text" name="categoria" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={cabecera.gimnasio}
          id="gimnasio"
          text="Gimnasio:"
          textWrong=""
        >
          <select name="gimnasio" id="" onChange={handleChangueInput}>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </select>
        </FieldInput>
      </form>
    </div>
  );
}
