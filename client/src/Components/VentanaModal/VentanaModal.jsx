import React, { useState } from "react";
import { Modal, Form, Button, Container, Col, Row } from "react-bootstrap";
import useTraining from "../../Hooks/useTraining";
import { days } from "../Utils/Options";
import style from "./VentanaModal.module.css";

export default function VentanaModal({
  text,
  handleShow,
  setShow,
  show,
  component1,
  component2,
  entrenamiento,
}) {
  const handleClose = () => {
    setShow(false);
  };
  const { handleDays, day } = useTraining();
  // console.log(entrenamiento[day.text].bicicleta?.text);

  return (
    <div className={style.body}>
      <Modal
        className="p-5"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className="bg-dark">
          {text}
          <Container className="bg-light h-100 mt-3">
            <p className="display-6 text-dark  p-2  text-center">
              <strong>ENTRENAMIENTO</strong>
            </p>
            <Form.Select
              size="lg"
              className="border border-primary"
              aria-label="Default select example"
              onChange={handleDays}
            >
              {days?.map(({ value }) => {
                return (
                  <option si className="text-center">
                    {value}
                  </option>
                );
              })}
            </Form.Select>
            <Container fluid className="">
              <Row class="justify-content-md-center">
                <Col>
                  <div className="p-3">
                    <p className="h4">
                      {`Bicicleta: `}
                      <span className="h5">
                        {entrenamiento?.[day.text]?.bicicleta.text}
                      </span>
                    </p>
                  </div>

                  <div className="p-2">
                    <p className="h4">
                      {`Calentamiento: `}
                      <span className="h5">
                        {entrenamiento?.[day.text]?.calentamiento.text}
                      </span>
                    </p>
                  </div>
                  <div className="p-3">
                    <p className="h4">
                      {`Ejercicio especifico: `}
                      <span className="h5">
                        {entrenamiento[day.text]?.ejercicio_especifico.text}
                      </span>
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="p-2">
                    <p className="h4">
                      {`Descansos: `}
                      <span className="h5">
                        {entrenamiento?.[day.text]?.descansos.text}
                      </span>
                    </p>
                  </div>
                  <div className="p-3">
                    <p className="h4">
                      {`Rodada final: `}
                      <span className="h5">
                        {entrenamiento?.[day.text]?.rodada_final.text}
                      </span>
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="h4">
                      {`Horas estimadas: `}
                      <span className="h5">
                        {entrenamiento[day.text]?.horas_estimadas.text}
                      </span>
                    </p>
                  </div>
                  <div className="p-2">
                    <p className="h4">
                      {`Tipo de entrenamiento: `}
                      <span className="h5">
                        {entrenamiento[day.text]?.tipo_entrenamiento.text}
                      </span>
                    </p>
                  </div>

                  {entrenamiento?.[day.text]?.gym.text && (
                    <div className="p-2">
                      <p className="h4">
                        {`Gimnasio: `}
                        <span className="h5">
                          {entrenamiento?.[day.text]?.gym.text}
                        </span>
                      </p>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
