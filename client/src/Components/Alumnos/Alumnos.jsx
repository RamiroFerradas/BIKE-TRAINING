import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import useFetchAlumnos from "../../Hooks/useFetchAlumnos";
import useLocalStorage from "../../Hooks/useLocalStorage";
import style from "./Alumnos.module.css";

import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Tab,
} from "react-bootstrap";
import VentanaModal from "../VentanaModal/VentanaModal";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

export default function Alumnos() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { loading, alumnos } = useFetchAlumnos();

  const [show, setShow] = useState(false);
  const [entrenamiento, setEntrenamiento] = useState([]);
  const [selected, setSelected] = useLocalStorage("userSelected", []);
  window.localStorage.removeItem("userSelected");

  const handleShow = (usuario) => {
    if (usuario.entrenamientos[0]) {
      setShow(true);
      setEntrenamiento(usuario?.entrenamientos[0]);
    } else {
      Swal.fire({
        icon: "error",
        title: `El alumno no tiene un entrenamiento cargado`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        text: "Desea cargarle un entrenamiento a este alumno?",
        confirmButtonText: "Cargar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        setSelected([usuario]);
        if (result.isConfirmed) {
          navigate("/", {
            state: { prevPathname: pathname },
          });
        }
      });
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <Container fluid className="pt-5 pb-5">
      <VentanaModal
        show={show}
        setShow={setShow}
        entrenamiento={entrenamiento}
        // component1={<EntrenamientoUsuario />}
      />

      <ListGroup>
        <Row className=" d-flex justify-content-center align-items-center">
          {alumnos?.map((ele, index) => (
            <>
              <Col key={index} xs={6} md={3} lg={2}>
                <Card
                  className={`p1 d-flex justify-content-center align-items-center ${style.card}`}
                >
                  <Card.Img
                    variant="top"
                    className="rounded-circle"
                    src={ele.foto}
                  />
                  <Card.Body>
                    <Card.Title>
                      <p>{`${ele.nombre} ${ele.apellido}`}</p>
                    </Card.Title>
                    <Card.Text>
                      {ele.localidad && ele.provincia ? (
                        <>
                          <p className="">{`${ele.localidad} ${ele.provincia}`}</p>
                        </>
                      ) : (
                        <p>
                          <br></br>
                        </p>
                      )}
                    </Card.Text>
                    <Button onClick={() => handleShow(ele)}>
                      Ver entrenamiento
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </ListGroup>
    </Container>
  );
}
