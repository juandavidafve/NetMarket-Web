import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Catalogo from "./paginas/Catalogo";
import Signup from "./paginas/SignUp";
import Login from "./paginas/Login";
import Dashboard from "./paginas/Dashboard";

library.add(fab, fas);

export default function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (usuarioFirebase) => {
      if (usuarioFirebase) {
        await buscarUsuario(usuarioFirebase.uid);
      } else {
        await setUsuario(null);
      }
    });
  }, []);

  async function actualizarUsuario() {
    await buscarUsuario(usuario.id);
  }

  async function buscarUsuario(id) {
    try {
      const response = await axios({
        url: `http://localhost:8080/NetMarket/api/usuario/${id}`,
      });
      if (response.headers["content-length"] > 0) {
        await setUsuario(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/catalogo/:id" element={<Catalogo />} />
        <Route
          path="/dashboard"
          element={
            usuario ? (
              <Dashboard
                usuario={usuario}
                actualizarUsuario={actualizarUsuario}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !usuario ? (
              <Signup setUsuario={setUsuario} />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />
        <Route
          path="/login"
          element={!usuario ? <Login /> : <Navigate to="/dashboard" replace />}
        />
      </Routes>
    </Router>
  );
}
