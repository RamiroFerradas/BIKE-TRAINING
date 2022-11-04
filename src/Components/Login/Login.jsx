import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Login.module.css";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

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
