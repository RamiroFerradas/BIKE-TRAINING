import React, { useRef } from "react";
import styles from "./EntrenamientoForm.module.css";
import FieldInput from "../Field/FieldInput";
import useTraining from "../../../Hooks/useTraining";
import { bicicletas, days } from "../../Utils/Options";
import useSelected from "../../../Hooks/useSelected";

export default function EntrenamientoForm() {
  const { entrenamiento, day, handleChangueInput, cabecera, setDay } =
    useTraining();
  const handleDays = (e) => {
    setDay({ text: e.target.value, error: false });
    document.getElementById("myForm").value = "";
  };
  const { seleccionado } = useSelected();

  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
  const input7 = useRef();
  const input8 = useRef();

  return (
    <div className={styles.body}>
      <div className={styles.divForm}></div>
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
              // id="myForm"
              name="bicicleta"
              onChange={handleChangueInput}
              defaultChecked={
                seleccionado[0]?.entrenamientos[0]?.[day.text]?.bicicleta
              }
              // value={entrenamiento[day.text]?.bicicleta.text}
            >
              <option>Seleccionar</option>
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

        {/* </FieldInput> */}
        {/* 
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
        </FieldInput> */}

        <FieldInput
          field={entrenamiento[day.text]?.calentamiento.text}
          text="Calentamiento:"
          textWrong=""
        >
          <textarea
            ref={input2}
            rows={"5"}
            cols={"30"}
            name="calentamiento"
            onChange={handleChangueInput}
            defaultValue={
              seleccionado[0]?.entrenamientos[0]?.[day.text]?.calentamiento.text
                ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.calentamiento
                    ?.text
                : ""
            }
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
            defaultValue={
              seleccionado[0]?.entrenamientos[0]?.[day.text]
                ?.ejercicio_especifico?.text
            }
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
            defaultValue={
              seleccionado[0]?.entrenamientos[0]?.[day.text]?.descansos.text
                ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.descansos
                    ?.text
                : ""
            }
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
            defaultValue={
              seleccionado[0]?.entrenamientos[0]?.[day.text]?.rodada_final.text
                ? seleccionado[0]?.entrenamientos[0]?.[day.text]?.rodada_final
                    ?.text
                : ""
            }
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
            defaultValue={
              seleccionado[0]?.entrenamientos[0]?.[day.text]?.horas_estimadas
                .text
                ? seleccionado[0]?.entrenamientos[0]?.[day.text]
                    ?.horas_estimadas?.text
                : ""
            }
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
            defaultValue={
              seleccionado[0]?.entrenamientos[0]?.[day.text]?.tipo_entrenamiento
                .text
                ? seleccionado[0]?.entrenamientos[0]?.[day.text]
                    ?.tipo_entrenamiento?.text
                : ""
            }
            name="tipo_entrenamiento"
            onChange={handleChangueInput}
          />
        </FieldInput>

        {cabecera.gimnasio.text === "Si" && (
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
              defaultValue={seleccionado[0]?.entrenamientos[0]?.[day.text]?.gym}
              name="gym"
              onChange={handleChangueInput}
            />
          </FieldInput>
        )}
      </div>
    </div>
  );
}
