import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import EntrenamientoForm from "../Entrenamientos/EntrenamientoForm";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return !isAuthenticated ? (
    <Login />
  ) : (
    <div>
      <NavBar />
      <EntrenamientoForm />
    </div>
  );
}
