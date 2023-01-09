import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useFetchUser from "../../../Hooks/useFetchUser";
import useTraining from "../../../Hooks/useTraining";
import Loader from "../../Loader/Loader";
import { days } from "../../Utils/Options";

export default function EntrenamientoUsuario() {
  const { usuario, loading } = useFetchUser();
  const { handleDays, day } = useTraining();

  if (!usuario.email || loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  //className="d-flex justify-content-center align-items-center"

  return (
    <div>
      <p className="display-6 text-dark  p-2  text-center">
        <strong>MI ENTRENAMIENTO</strong>
      </p>
      <Container className="bg-light h-100">
        <Form.Select
          size="lg"
          aria-label="Default select example"
          onChange={handleDays}
        >
          {days?.map((day) => {
            return (
              <option si className="text-center">
                {day.value}
              </option>
            );
          })}
        </Form.Select>
        <Container fluid className="">
          <Row class="justify-content-md-center">
            <Col>
              <div className="p-3">
                <p className="h3">
                  {`Bicicleta: `}
                  <span className="h5">
                    {usuario.entrenamientos[0][day.text].bicicleta.text}
                  </span>
                </p>
              </div>

              <div className="p-2">
                <p className="h3">
                  {`Calentamiento: `}
                  <span className="h5">
                    {usuario.entrenamientos[0][day.text].calentamiento.text}
                  </span>
                </p>
              </div>
              <div className="p-3">
                <p className="h3">
                  {`Ejercicio especifico: `}
                  <span className="h5">
                    {
                      usuario.entrenamientos[0][day.text].ejercicio_especifico
                        .text
                    }
                  </span>
                </p>
              </div>
            </Col>
            <Col>
              <div className="p-2">
                <p className="h3">
                  {`Descansos: `}
                  <span className="h5">
                    {usuario.entrenamientos[0][day.text].descansos.text}
                  </span>
                </p>
              </div>
              <div className="p-3">
                <p className="h3">
                  {`Rodada final: `}
                  <span className="h5">
                    {usuario.entrenamientos[0][day.text].rodada_final.text}
                  </span>
                </p>
              </div>
              <div className="p-2">
                <p className="h3">
                  {`Horas estimadas: `}
                  <span className="h5">
                    {usuario.entrenamientos[0][day.text].horas_estimadas.text}
                  </span>
                </p>
              </div>
              <div className="p-2">
                <p className="h3">
                  {`Tipo de entrenamiento: `}
                  <span className="h5">
                    {
                      usuario.entrenamientos[0][day.text].tipo_entrenamiento
                        .text
                    }
                  </span>
                </p>
              </div>

              {usuario.entrenamientos[0][day.text].gym.text && (
                <div className="p-2">
                  <p className="h3">
                    {`Gimnasio: `}
                    <span className="h5">
                      {usuario.entrenamientos[0][day.text].gym.text}
                    </span>
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
