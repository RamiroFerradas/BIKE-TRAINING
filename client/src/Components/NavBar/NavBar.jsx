import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useScreenSize from "../../Hooks/useScreenSize";
import useFetchUser from "../../Hooks/useFetchUser";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

export default function NavBar() {
  const { user, logout } = useAuth0();
  const { width } = useScreenSize();
  const { usuario } = useFetchUser();
  const { pathname } = useLocation();
  const expand = "lg";
  let img = (
    <img
      className={`img-flui ${styles.nav__img}`}
      src={logo}
      alt="logoDurandoBike"
    />
  );
  let title = <p className={`h2 ${styles.nav__title}`}>DURANDO TRAINING</p>;

  return (
    <>
      <Navbar
        // fixed={"top"}
        // className={styles.navBar}
        expand="lg"
        variant="light"
        className={`d-flex justify-content-between align-items-center ${styles.navBar}`}
      >
        <Container fluid>
          <NavLink
            to="/"
            className="text-decoration-none d-flex justify-content-between align-items-center"
          >
            {img}
            {width > 460 && <Navbar.Brand href="#">{title}</Navbar.Brand>}
          </NavLink>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              className={styles.offcanvas_menu_header}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Container className="d-flex">
                  {title}
                  <div className="me-3 p-3"> {img}</div>
                </Container>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
              className={`${width < 991 && styles.offcanvas_menu}`}
            >
              <Nav className="justify-content-end flex-grow-1 align-items-center">
                {usuario?.entrenador && (
                  <>
                    <NavLink
                      className={({ isActive }) =>
                        `me-5 ${isActive ? styles.active : styles.nav__link}`
                      }
                      to={"/"}
                    >
                      <p>CREAR ENTRENAMIENTO</p>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        `me-5 ${isActive ? styles.active : styles.nav__link}`
                      }
                      to="/alumnos"
                    >
                      <p>ALUMNOS</p>
                    </NavLink>
                  </>
                )}
                {!usuario?.entrenador && (
                  <>
                    <NavLink
                      to={"/perfil"}
                      className={({ isActive }) =>
                        `me-5 ${
                          isActive || pathname === "/"
                            ? styles.active
                            : styles.nav__link
                        }`
                      }
                    >
                      <p>PERFIL</p>
                    </NavLink>
                    <NavLink
                      to={"/entrenamiento"}
                      className={({ isActive }) =>
                        `me-5 ${isActive ? styles.active : styles.nav__link}`
                      }
                    >
                      <p>ENTRENAMIENTO</p>
                    </NavLink>
                  </>
                )}
                {width < 991 && (
                  <NavLink
                    className={`me-5 ${styles.nav__link}`}
                    onClick={() => logout()}
                  >
                    Salir
                  </NavLink>
                )}
              </Nav>

              {width > 991 && (
                <NavDropdown
                  className={`d-flex pe-5 ${styles.dropDownBG}`}
                  title={
                    <>
                      {user?.picture && width > 690 && (
                        <img
                          className={` ${styles.imgUser}`}
                          src={user.picture ? user.picture : ""}
                          alt={user.given_name}
                        />
                      )}
                    </>
                  }
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  {width < 991 && (
                    <>
                      <NavDropdown.Item href="#action1">
                        <NavLink
                          to={"/perfil"}
                          className={styles.nav__link__dropdown}
                        >
                          <p>Perfil</p>
                        </NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action1">
                        <NavLink
                          to={"/entrenamiento"}
                          className={styles.nav__link__dropdown}
                        >
                          <p>Entrenamiento</p>
                        </NavLink>
                      </NavDropdown.Item>
                    </>
                  )}
                  <NavDropdown.Item href="#action2">
                    <NavLink
                      className={styles.nav__link__dropdown}
                      onClick={() => logout()}
                    >
                      Salir
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
// export function DropDown_() {
//   <NavDropdown
//     className="d-flex pe-5"
//     title={
//       <>
//         {user?.picture && width > 690 && (
//           <div>
//             <img
//               className={styles.imgUser}
//               src={user.picture ? user.picture : ""}
//               alt={user.given_name}
//             />
//           </div>
//         )}
//       </>
//     }
//     id={`offcanvasNavbarDropdown-expand-${expand}`}
//   >
//     <NavDropdown.Item href="#action1">Utensillos</NavDropdown.Item>
//     <NavDropdown.Item href="#action2">Parrillas</NavDropdown.Item>
//     <NavDropdown.Item href="#action3">Termotanques</NavDropdown.Item>
//     <NavDropdown.Item href="#action4">Estufas</NavDropdown.Item>
//     <NavDropdown.Divider />
//     <NavDropdown.Item
//       href="#action5"
//       // onClick={() => scrollToSeccion(servicios)}
//     >
//       Servicios
//     </NavDropdown.Item>
//   </NavDropdown>;
// }
