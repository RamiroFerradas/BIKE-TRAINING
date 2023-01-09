import React from "react";
import useFetchUser from "../../../Hooks/useFetchUser";
import Loader from "../../Loader/Loader";

export default function EntrenamientoUsuario() {
  const { usuario, loading } = useFetchUser();

  if (!usuario.email || loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  console.log(usuario.entrenamientos);
  return <div></div>;
}
