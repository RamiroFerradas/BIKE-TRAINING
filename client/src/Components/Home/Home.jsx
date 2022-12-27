import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "../../Hooks/useFetchUser";
import { fetchUsuario, postAlumno } from "../../redux/actions/alumnos";
import Entrenamientos from "../Entrenamientos/Entrenamientos";
import Loader from "../Loader/Loader";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import Perfil from "../Perfil/Perfil";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  const { usuario, loading } = useFetchUser();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(postAlumno(user));
      dispatch(fetchUsuario(user.email));
    }
  }, [user]);
  const [flag, setFlag] = useState(false);
  console.log(usuario);
  setTimeout(() => {
    setFlag(true);
  }, 800);

  // if (!flag || loading || isLoading) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // }

  return !isAuthenticated ? (
    <Login />
  ) : (
    <div className={style.body}>
      {!flag || loading || isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          {usuario.entrenador ? <Entrenamientos /> : <Perfil />}
        </>
      )}
    </div>
  );
}
