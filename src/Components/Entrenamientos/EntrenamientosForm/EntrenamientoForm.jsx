import React, { useState } from "react";
import styles from "./EntrenamientoForm.module.css";
import FieldInput from "../Field/FieldInput";
import { bicicletas, days } from "../Options/Options";
import useTraining from "../../../Hooks/useTraining";

export default function EntrenamientoForm() {
  const { entrenamiento, setEntrenamiento } = useTraining();

  const [day, setDay] = useState({ text: "Lunes", error: false });
  const handleDays = (e) => {
    setDay({ text: e.target.value, error: false });
    document.getElementById("myForm").reset();
  };

  console.log(entrenamiento);

  const handleChangueInput = (e) => {
    setEntrenamiento((state) => {
      return {
        ...state,
        [day.text]: {
          ...entrenamiento[day.text],
          [e.target.name]: { text: e.target.value, error: false },
        },
      };
    });
  };

  return (
    <div>
      <FieldInput field={day} id="dia" text="Dia:" textWrong="">
        <select name="day" id="day" onChange={handleDays}>
          {days.map((day) => {
            return (
              <option value={day.value} id={day.id}>
                {day.value}
              </option>
            );
          })}
        </select>
      </FieldInput>
      <form action="" id="myForm">
        <FieldInput
          field={entrenamiento[day.text].bicicleta}
          id="bicicleta"
          text="Bicicleta:"
          textWrong=""
        >
          <select name="bicicleta" id="bici" onChange={handleChangueInput}>
            {bicicletas.map((bici) => {
              return (
                <option value={bici.value} id={bici.id}>
                  {bici.value}
                </option>
              );
            })}
          </select>
        </FieldInput>
        <FieldInput
          field={entrenamiento[day.text].calentamiento}
          id="calentamiento"
          text="Calentamiento:"
          textWrong=""
        >
          <textarea name="calentamiento" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={entrenamiento[day.text].ejercicio_especifico}
          id="ejercicio_especifico"
          text="Ejercicio Especifico:"
          textWrong=""
        >
          <textarea name="ejercicio_especifico" onChange={handleChangueInput} />
        </FieldInput>
        <FieldInput
          field={entrenamiento[day.text].descansos}
          id="descansos"
          text="Descansos:"
          textWrong=""
        >
          <textarea name="descansos" onChange={handleChangueInput} />
        </FieldInput>
      </form>
    </div>
  );
}
