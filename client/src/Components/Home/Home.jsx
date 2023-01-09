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

  // if (loading || !usuario.email) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // }

  return !isAuthenticated ? (
    <Login />
  ) : (
    <>
      {!flag || loading || !usuario.email ? (
        <>
          <Loader />
        </>
      ) : (
        <div className={style.container}>
          {usuario.entrenador ? <Entrenamientos /> : <Perfil />}
        </div>
      )}
    </>
  );
}
