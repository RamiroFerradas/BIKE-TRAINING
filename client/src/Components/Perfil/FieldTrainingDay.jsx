import React, { useId } from "react";

export default function FieldTrainingDay({ e, dia }) {
  const id = useId();
  return (
    <div>
      <p>{dia}:</p>
      <ul>
        <li>Bicicleta: {e[dia]?.bicicleta.text}</li>
        <li>Ejercicio Especifico: {e[dia]?.ejercicio_especifico.text}</li>
        <li>Calentamiento: {e[dia]?.calentamiento.text}</li>
        <li>Descansos: {e[dia]?.descansos.text}</li>
        <li>Rodada final:{e[dia]?.rodada_final.text}</li>
        <li>Horas estimadas: {e[dia]?.horas_estimadas.text}</li>
        <li>tipo de entrenamiento: {e[dia]?.tipo_entrenamiento.text}</li>
        <li>{e[dia]?.gym.text}</li>
      </ul>
    </div>
  );
}
