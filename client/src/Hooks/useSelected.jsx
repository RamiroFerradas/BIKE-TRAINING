import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useTraining from "./useTraining";

export default function useSelected(selected) {
  const { cabecera } = useTraining();
  const alumnos = useSelector((state) => state.alumnos.allAlumnos);
  const [view, setView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [seleccionado, setSeleccionado] = useState([]);

  useEffect(() => {
    setView(true);
    setSeleccionado(alumnos.filter((e) => e.id === cabecera.id.text?.value));
  }, [alumnos, cabecera]);

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
      setSeleccionado(selected);
    }
    if (seleccionado.length) {
      setView(true);
    } else {
      setView(false);
    }
  }, [seleccionado, selected]);

  return { view, seleccionado, setSeleccionado, isLoading };
}
