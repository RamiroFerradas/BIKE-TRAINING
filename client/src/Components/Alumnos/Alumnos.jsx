import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Loader from "../Loader/Loader";
import useFetchAlumnos from "../../Hooks/useFetchAlumnos";
import style from "./Alumnos.module.css";
import { Card, Col, Container, ListGroup, Row, Tab } from "react-bootstrap";

export default function Alumnos() {
  const { loading, alumnos } = useFetchAlumnos();
  return loading ? (
    <Loader />
  ) : (
    <div className="p-5">
      <ListGroup>
        <Row className=" d-flex justify-content-center align-items-center">
          {alumnos?.map((e, index) => {
            return (
              <>
                <Col key={index} xs={6} md={3} lg={2}>
                  <Card className="p-1" style={{ width: "12rem" }}>
                    <Card.Img
                      variant="top"
                      className="rounded-circle"
                      src={e.foto}
                    />
                    <Card.Body>
                      <Card.Title>{`${e.nombre} ${e.apellido}`}</Card.Title>
                      {e.localidad && e.provincia && (
                        <>
                          <Card.Text>{`${e.localidad} ${e.provincia}`}</Card.Text>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </ListGroup>
    </div>
  );
}
