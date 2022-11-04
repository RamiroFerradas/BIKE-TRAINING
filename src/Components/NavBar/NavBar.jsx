import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const { user, logout } = useAuth0();
  const { pathname } = useLocation();
  useEffect(() => {}, []);

  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.navBar__logo}>
          <img className={styles.nav__img} src={logo} alt="logoDurandoBike" />
          <h1 className={styles.nav__title}>DURANDO TRAINING</h1>
        </div>

        <div className={styles.nav__list}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav__link
            }
            to="/"
          >
            CREAR ENTRENAMIENTO
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav__link
            }
            to="/alumnos"
          >
            ALUMNOS
          </NavLink>
          <NavLink className={styles.nav__link} onClick={() => logout()}>
            SALIR
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
