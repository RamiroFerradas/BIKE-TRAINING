import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useScreenSize from "../../Hooks/useScreenSize";
import useFetchUser from "../../Hooks/useFetchUser";

export default function NavBar() {
  const { user, logout } = useAuth0();
  const { width } = useScreenSize();
  const usuario = useFetchUser();
  return (
    <div>
      <nav className={styles.navBar}>
        <Link to="/" className={styles.link}>
          <div className={styles.navBar__logo}>
            <img className={styles.nav__img} src={logo} alt="logoDurandoBike" />
            <h1 className={styles.nav__title}>DURANDO TRAINING</h1>
            {user?.picture && width <= 690 && (
              <img
                className={styles.imgUser}
                src={user.picture ? user.picture : ""}
                alt={user.given_name}
              />
            )}
          </div>
        </Link>
        <div className={styles.nav__list}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.nav__link
            }
            to="/"
          >
            {usuario.usuario.entrenador ? "CREAR ENTRENAMIENTO" : "PERFIL"}
          </NavLink>
          {usuario.usuario.entrenador && (
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : styles.nav__link
              }
              to="/alumnos"
            >
              ALUMNOS
            </NavLink>
          )}
          <NavLink className={styles.nav__link} onClick={() => logout()}>
            SALIR
          </NavLink>
          {user?.picture && width > 690 && (
            <div>
              <img
                className={styles.imgUser}
                src={user.picture ? user.picture : ""}
                alt={user.given_name}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
