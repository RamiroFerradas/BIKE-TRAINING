import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

//COMPONENTES
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  if (isLoading) {
    return <h1>CARGANDO...</h1>;
  }
  return (
    <div className="App">
      <Routes>
        {/* <Route index element={<Login />} /> */}
        <Route path="/" element={<Home />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
