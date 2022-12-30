import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import useFetchUser from "./Hooks/useFetchUser";

//COMPONENTES
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Alumnos from "./Components/Alumnos/Alumnos";
import Loader from "./Components/Loader/Loader";
import Perfil from "./Components/Perfil/Perfil";
import Entrenamientos from "./Components/Entrenamientos/Entrenamientos";
import Error404 from "./Components/Error404/Error404";

function App() {
  const { isLoading, user } = useAuth0();
  const { usuario, loading } = useFetchUser();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {usuario.entrenador && (
          <Route path="/entrenador" element={<Entrenamientos />}></Route>
        )}
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/alumnos" element={<Alumnos />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
