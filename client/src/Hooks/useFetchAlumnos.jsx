import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlumnos } from "../redux/actions/alumnos";
import useTraining from "../Hooks/useTraining";

export default function useFetchAlumnos() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState(false);
  const alumnos = useSelector((state) => state.alumnos.allAlumnos);

  useEffect(() => {
    setLoading(false);
    if (!alumnos.length) {
      dispatch(fetchAlumnos());
    }
  }, [alumnos, alumnos.length]);

  return { alumnos, loading, view };
}
