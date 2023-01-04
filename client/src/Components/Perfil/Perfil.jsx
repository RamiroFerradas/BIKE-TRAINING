import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetchUser from "../../Hooks/useFetchUser";

import Loader from "../Loader/Loader";
import NavBar from "../NavBar/NavBar";
import { days } from "../Utils/Options";
import FieldTrainingDay from "./FieldTrainingDay";

export default function Perfil() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { usuario, loading } = useFetchUser();
  const [selected, setSelected] = useState("Lunes");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  if (loading || !usuario.email) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return !isAuthenticated ? (
    loginWithRedirect()
  ) : (
    <>
      <NavBar />
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        user.picture
                          ? user.picture
                          : `https://bootdey.com/img/Content/avatar/avatar${getRandomInt(
                              5
                            )}.png`
                      }
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{user.name}</h4>
                      <p className="text-secondary mb-1"></p>
                      <p className="text-muted font-size-sm">
                        {usuario?.categoria}
                      </p>
                      <button className="btn btn-primary">Perfil</button>
                      <button className="btn btn-outline-primary">
                        Entrenamiento
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Nombre:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {usuario?.nombre}
                    </div>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Apellido:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {usuario?.apellido}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {usuario.email}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Telefono:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {usuario?.telefono}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Localidad</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {`${usuario?.localidad},  ${usuario?.provincia}`}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Categoria:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {usuario?.categoria}
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="col-sm-12">
                      <a
                        className="btn btn-info "
                        target="__blank"
                        href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                      >
                        Edit
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 72%"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 89%"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 55%"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 66%"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          assignment
                        </i>
                        Project Status
                      </h6>
                      <small>Web Design</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Website Markup</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 72%"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>One Page</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 89%"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Mobile Template</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 55%"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <small>Backend API</small>
                      <div className="progress mb-3">
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style="width: 66%"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
