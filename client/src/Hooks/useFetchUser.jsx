import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuario } from "../redux/actions/alumnos";

export default function useFetchUser() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const usuario = useSelector((state) => state.alumnos.usuario);

  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    setLoading(true);
    if (!usuario.email) {
      isAuthenticated && dispatch(fetchUsuario(user?.email));
    } else {
      setLoading(false);
    }
  }, [user, usuario.email, loading]);
  return { usuario, loading };
}
