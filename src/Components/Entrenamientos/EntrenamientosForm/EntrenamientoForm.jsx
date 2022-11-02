import React, { useState } from "react";
import styles from "./EntrenamientoForm.module.css";
import FieldInput from "../Field/FieldInput";
import { bicicletas, days } from "../Options/Options";
import useTraining from "../../../Hooks/useTraining";

export default function EntrenamientoForm() {
  const { entrenamiento, setEntrenamiento } = useTraining();

  const [day, setDay] = useState({ text: "Lunes", error: false });

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
  const handleDays = (e) => {
    setDay({ text: e.target.value, error: false });
    document.getElementById("myForm").reset();
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <FieldInput field={day.text} id="dia" text="Dia:" textWrong="">
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
            field={entrenamiento[day.text]?.bicicleta}
            id="bicicleta"
            text="Bicicleta:"
            textWrong=""
          >
            <select name="bicicleta" id="bici" onChange={handleChangueInput}>
              {bicicletas.map((bici) => {
                return <option id={bici.id}>{bici.value}</option>;
              })}
            </select>
          </FieldInput>
          <FieldInput
            field={entrenamiento[day.text]?.calentamiento.text}
            id="calentamiento"
            text="Calentamiento:"
            textWrong=""
          >
            <textarea
              rows={"5"}
              cols={"30"}
              name="calentamiento"
              onChange={handleChangueInput}
              value={entrenamiento[day.text]?.calentamiento.text}
            />
          </FieldInput>
          <FieldInput
            field={entrenamiento[day.text]?.ejercicio_especifico.text}
            id="ejercicio_especifico"
            text="Ejercicio Especifico:"
            textWrong=""
          >
            <textarea
              rows={"5"}
              cols={"30"}
              value={entrenamiento[day.text]?.ejercicio_especifico.text}
              name="ejercicio_especifico"
              onChange={handleChangueInput}
            />
          </FieldInput>
          <FieldInput
            field={entrenamiento[day.text]?.descansos}
            id="descansos"
            text="Descansos:"
            textWrong=""
          >
            <textarea
              rows={"5"}
              cols={"30"}
              value={entrenamiento[day.text]?.descansos.text}
              name="descansos"
              onChange={handleChangueInput}
            />
          </FieldInput>
        </form>
      </div>
    </div>
  );
}
