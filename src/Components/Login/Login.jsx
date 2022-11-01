import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Login.module.css";

export default function Login() {
  const { user, loginWithRedirect, logout, isLoading } = useAuth0();
  console.log(user);

  return (
    <div className={styles.body}>
      <button
        onClick={() => loginWithRedirect()}
        className={styles.buttonlogin}
      >
        INGRESAR
      </button>
      {/* <button onClick={() => logout()}> SALIR</button> */}
    </div>
  );
}
