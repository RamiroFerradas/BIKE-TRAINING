export const modelTraining = (value, entrenamiento) => {
  const data = {
    bicicleta: entrenamiento[value].bicicleta,
    calentamiento: entrenamiento[value].calentamiento,
    ejercicio_especifico: entrenamiento[value].ejercicio_especifico,
    descansos: entrenamiento[value].descansos,
    rodada_final: entrenamiento[value].rodada_final,
    horas_estimadas: entrenamiento[value].horas_estimadas,
    tipo_entrenamiento: entrenamiento[value].tipo_entrenamiento,
    gym: entrenamiento[value].gym,
  };
  return data;
};
