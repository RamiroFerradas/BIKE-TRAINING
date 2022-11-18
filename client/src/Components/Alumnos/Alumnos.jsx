import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import useFetchAlumnos from "../../Hooks/useFetchAlumnos";
import style from "./Alumnos.module.css";

export default function Alumnos() {
  const { loading, alumnos } = useFetchAlumnos();
  return loading ? (
    <Loader />
  ) : (
    <div className={style.body}>
      <NavBar />
      <ul>
        {alumnos?.map((e) => {
          return (
            <li key={e.id}>
              Alumno: {e.nombre} {e.apellido}
              Localidad: {e.localidad}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
