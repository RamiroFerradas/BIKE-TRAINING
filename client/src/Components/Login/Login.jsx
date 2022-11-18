import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./Login.module.css";
import logo from "../../assets/logo.png";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.body}>
      <img src={logo} alt="logoDB" />
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
