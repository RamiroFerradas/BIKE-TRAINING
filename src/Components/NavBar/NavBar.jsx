import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const { user, logout } = useAuth0();
  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.navBar__logo}>
          <img className={styles.nav__img} src={logo} alt="logoDurandoBike" />
          <h1 className={styles.nav__title}>DURANDO TRAINING</h1>
        </div>

        <div className={styles.nav__list}>
          <NavLink className={styles.nav__link}>CREAR ENTRENAMIENTO</NavLink>
          <NavLink className={styles.nav__link}>ALUMNOS</NavLink>
          <NavLink className={styles.nav__link} onClick={() => logout()}>
            SALIR
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
