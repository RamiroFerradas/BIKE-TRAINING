import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "../../Hooks/useFetchUser";
import { fetchUsuario, postAlumno } from "../../redux/actions/alumnos";
import Cabecera from "../Entrenamientos/Cabecera/Cabecera";
import Entrenamientos from "../Entrenamientos/Entrenamientos";
import Loader from "../Loader/Loader";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Perfil from "../Perfil/Perfil";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  const [flag, setFlag] = useState(false);

  const { usuario, loading } = useFetchUser();
  useEffect(() => {
    dispatch(postAlumno(user));
    setTimeout(() => {
      setFlag(true);
    }, 500);
  }, [user]);

  return !isAuthenticated ? (
    <Login />
  ) : (
    <div className={style.container}>
      {!flag || loading || isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          {usuario.entrenador ? (
            <div className={style.entrenamiento}>
              <Cabecera />
              <Entrenamientos />
            </div>
          ) : (
            <Perfil />
          )}
        </>
      )}
    </div>
  );
}
