import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useTraining from "./useTraining";

export default function useSelected() {
  const { cabecera } = useTraining();
  const alumnos = useSelector((state) => state.alumnos.allAlumnos);
  const [view, setView] = useState(false);

  const [seleccionado, setSeleccionado] = useState({
    localidad: "",
    id: "",
    horas_disponibles: 0,
    alumno: false,
    objetivo: "",
    categoria: "",
    gimnasio: "",
  });

  useEffect(() => {
    setView(true);
    setSeleccionado(alumnos.filter((e) => e.id === cabecera.id.text?.value));
  }, [alumnos, cabecera]);

  useEffect(() => {
    if (seleccionado.length) {
      setView(true);
    } else {
      setView(false);
    }
  }, [seleccionado]);

  return { view, seleccionado, setSeleccionado };
}
