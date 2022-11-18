import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "../../Hooks/useFetchUser";

import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";
import { days } from "../Utils/Options";
import FieldTrainingDay from "./FieldTrainingDay";

export default function Perfil() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { usuario, loading } = useFetchUser();
  const [selected, setSelected] = useState("Lunes");

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return !isAuthenticated ? (
    loginWithRedirect()
  ) : (
    <div>
      <h1>{usuario.nombre}</h1>
      <h1>{usuario.apellido}</h1>
      <h1>{usuario.email}</h1>
      <h1>{usuario.localidad}</h1>
      <select onChange={(e) => setSelected(e.target.value)}>
        {days?.map((e) => {
          return (
            <option key={e.id} value={e.value}>
              {e.value}
            </option>
          );
        })}
      </select>

      {usuario.entrenamientos?.map((ele) => {
        return (
          <>
            <FieldTrainingDay e={ele} dia={selected} />
          </>
        );
      })}
    </div>
  );
}
