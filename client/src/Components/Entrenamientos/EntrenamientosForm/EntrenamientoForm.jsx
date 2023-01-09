import React, { useRef, useEffect } from "react";
import styles from "./EntrenamientoForm.module.css";
import FieldInput from "../Field/FieldInput";
import useTraining from "../../../Hooks/useTraining";
import { bicicletas, days } from "../../Utils/Options";
import useSelected from "../../../Hooks/useSelected";

export default function EntrenamientoForm({
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
}) {
  const { entrenamiento, day, handleChangueInput, handleDays } = useTraining();
  const { seleccionado } = useSelected();

  useEffect(() => {
    input2.current.value = entrenamiento[day?.text]?.calentamiento.text
      ? entrenamiento[day?.text]?.calentamiento.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.calentamiento?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.calentamiento?.text
      : "";
    input2.current.value = entrenamiento[day?.text]?.calentamiento.text
      ? entrenamiento[day?.text]?.calentamiento.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.calentamiento?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.calentamiento?.text
      : "";
    input3.current.value = entrenamiento[day?.text]?.ejercicio_especifico.text
      ? entrenamiento[day?.text]?.ejercicio_especifico.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.ejercicio_especifico
          ?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.ejercicio_especifico
          ?.text
      : "";
    input4.current.value = entrenamiento[day?.text]?.descansos.text
      ? entrenamiento[day?.text]?.descansos.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.descansos?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.descansos?.text
      : "";
    input5.current.value = entrenamiento[day?.text]?.rodada_final.text
      ? entrenamiento[day?.text]?.rodada_final.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.rodada_final?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.rodada_final?.text
      : "";
    input6.current.value = entrenamiento[day?.text]?.horas_estimadas.text
      ? entrenamiento[day?.text]?.horas_estimadas.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.horas_estimadas?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.horas_estimadas?.text
      : "";
    input7.current.value = entrenamiento[day?.text]?.tipo_entrenamiento.text
      ? entrenamiento[day?.text]?.tipo_entrenamiento.text
      : seleccionado[0]?.entrenamientos[0]?.[day.text]?.tipo_entrenamiento?.text
      ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.tipo_entrenamiento?.text
      : "";
    // input8.current.value = entrenamiento[day?.text]?.gym.text
    //   ? entrenamiento[day?.text]?.gym.text
    //   : seleccionado[0]?.entrenamientos[0]?.[day.text]?.gym?.text
    //   ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.gym?.text
    //   : "";
  }, [
    input1.current,
    input2.current,
    input3.current,
    input4.current,
    input5.current,
    input6.current,
    input7.current,
    input8.current,
    day.text,
    seleccionado[0]?.entrenamientos[0],
  ]);

  return (
    <div className={styles.body}>
      <div className={styles.form}>
        {/* <FieldInput field="" id="" text="" textWrong=""> */}
        <div className={styles.selects}>
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
            <select
              ref={input1}
              id="myForm"
              name="bicicleta"
              onChange={handleChangueInput}

              // value={entrenamiento[day.text]?.bicicleta.text}
            >
              <option value={""}>Seleccionar</option>;
              {bicicletas.map((bici) => {
                return (
                  <option key={bici.id} id={bici.id} value={bici.label}>
                    {bici?.label}
                  </option>
                );
              })}
            </select>
          </FieldInput>
        </div>

        <FieldInput
          field={entrenamiento[day.text]?.calentamiento.text}
          text="Calentamiento:"
          textWrong=""
        >
          <textarea
            ref={input2}
            id="myForm"
            rows={"5"}
            cols={"30"}
            name="calentamiento"
            onChange={handleChangueInput}
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
            ref={input3}
            cols={"30"}
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
            ref={input4}
            rows={"5"}
            cols={"30"}
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
            ref={input5}
            rows={"5"}
            cols={"30"}
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
          <input
            ref={input6}
            type={"number"}
            step=".1"
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
            ref={input7}
            id="myForm"
            rows={"5"}
            cols={"30"}
            name="tipo_entrenamiento"
            onChange={handleChangueInput}
          />
        </FieldInput>

        {seleccionado[0]?.gimnasio && (
          <FieldInput
            field={entrenamiento[day.text]?.gym}
            id="gym"
            text="Gym:"
            textWrong=""
          >
            <textarea
              ref={input8}
              id="myForm"
              rows={"5"}
              cols={"30"}
              name="gym"
              onChange={handleChangueInput}
            />
          </FieldInput>
        )}
      </div>
    </div>
  );
}
