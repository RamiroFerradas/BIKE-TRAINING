import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

//COMPONENTES
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Alumnos from "./Components/Alumnos/Alumnos";
import Loader from "./Components/Loader/Loader";
import Perfil from "./Components/Perfil/Perfil";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/alumnos" element={<Alumnos />}></Route>
        {/* <Route path="/perfil/" element={<Perfil />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
