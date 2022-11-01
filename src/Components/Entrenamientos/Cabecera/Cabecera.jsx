import React, { useState } from "react";
import useTraining from "../../../Hooks/useTraining";
import FieldInput from "../Field/FieldInput";

export default function Cabecera() {
  const { cabecera, setCabecera } = useTraining();
  const handleChangueInput = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setCabecera({
      ...cabecera,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form action="">
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
          field={cabecera.localidad}
          id="localidad"
          text="Localidad:"
          textWrong=""
        >
          <input type="text" name="localidad" onChange={handleChangueInput} />
        </FieldInput>
      </form>
    </div>
  );
}
