import React from "react";
import styles from "./EntrenamientoForm.module.css";
import FieldInput from "../Field/FieldInput";
import { bicicletas, days } from "../Options/Options";
import useTraining from "../../../Hooks/useTraining";

export default function EntrenamientoForm() {
  const { entrenamiento, day, handleChangueInput, handleDays } = useTraining();

  return (
    <div className={styles.body}>
      <div className={styles.divForm}></div>
      <form action="">
        <FieldInput field="" id="dia" text="Dia:" textWrong="">
          <select name="day" id="day" onChange={(e) => handleDays(e)}>
            {days.map((day) => {
              return (
                <option key={day.id} value={day.value} id={day.id}>
                  {day.value}
                </option>
              );
            })}
          </select>
        </FieldInput>

        <FieldInput
          className={styles.selectDay}
          field={entrenamiento[day.text]?.bicicleta}
          id="bicicleta"
          text="Bicicleta:"
          textWrong=""
        >
          <select name="bicicleta" id="bici" onChange={handleChangueInput}>
            {bicicletas.map((bici) => {
              return (
                <option key={bici.id} id={bici.id} value={bici.value}>
                  {bici.value}
                </option>
              );
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
            id="myForm"
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
            id="myForm"
          />
        </FieldInput>

        <FieldInput
          field={entrenamiento[day.text]?.descansos}
          id="descansos"
          text="Descansos:"
          textWrong=""
        >
          <textarea
            id="myForm"
            rows={"5"}
            cols={"30"}
            value={entrenamiento[day.text]?.descansos.text}
            name="descansos"
            onChange={handleChangueInput}
          />
        </FieldInput>

        <FieldInput
          field={entrenamiento[day.text]?.rodada_final}
          id="rodada_final"
          text="Rodada final"
          textWrong=""
        >
          <textarea
            id="myForm"
            rows={"5"}
            cols={"30"}
            value={entrenamiento[day.text]?.rodada_final.text}
            name="rodada_final"
            onChange={handleChangueInput}
          />
        </FieldInput>

        <FieldInput
          field={entrenamiento[day.text]?.horas_estimadas}
          id="horas_estimadas"
          text="Horas estimadas:"
          textWrong=""
        >
          <textarea
            id="myForm"
            rows={"5"}
            cols={"30"}
            value={entrenamiento[day.text]?.horas_estimadas.text}
            name="horas_estimadas"
            onChange={handleChangueInput}
          />
        </FieldInput>

        <FieldInput
          field={entrenamiento[day.text]?.tipo_entrenamiento}
          id="tipo_entrenamiento"
          text="Tipo de entrenamiento:"
          textWrong=""
        >
          <textarea
            id="myForm"
            rows={"5"}
            cols={"30"}
            value={entrenamiento[day.text]?.tipo_entrenamiento.text}
            name="tipo_entrenamiento"
            onChange={handleChangueInput}
          />
        </FieldInput>

        <FieldInput
          field={entrenamiento[day.text]?.gym}
          id="gym"
          text="Gym:"
          textWrong=""
        >
          <textarea
            id="myForm"
            rows={"5"}
            cols={"30"}
            value={entrenamiento[day.text]?.gym.text}
            name="gym"
            onChange={handleChangueInput}
          />
        </FieldInput>
      </form>
    </div>
  );
}
