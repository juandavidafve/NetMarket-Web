import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import axios from "axios";

import Error from "../componentes/Error";
import Input from "../componentes/Input";

export default function Signup({ setUsuario }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [status, setStatus] = useState("");
  const [modalTrigger, setModdalTrigger] = useState(0);

  async function crearUsuario(usuario) {
    try {
      const res = await axios.post(
        "http://localhost:8080/NetMarket/api/usuario/",
        usuario
      );
      setUsuario(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const credencial = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      await crearUsuario({
        id: credencial.user.uid,
        nombre: form.name,
        correo: form.email,
      });

      navigate("/login");
    } catch (error) {
      setModdalTrigger(modalTrigger + 1);
      setStatus(error.message);
    }
  }

  return (
    <main
      className="bg-primary-subtle d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <Error mensaje={status} modalTrigger={modalTrigger} />

      <div className="bg-light m-5 p-4 d-flex flex-column align-items-center">
        <h1 className="fw-bold">Registrarse</h1>
        <div className="d-flex flex-column align-items-center my-4">
          <Input
            label="Nombre"
            name="name"
            type="text"
            placeholder="Usuario"
            form={form}
            setForm={setForm}
          />
          <Input
            label="Correo"
            name="email"
            type="email"
            placeholder="usuario@correo.com"
            form={form}
            setForm={setForm}
          />
          <Input
            label="Contraseña"
            name="password"
            type="password"
            form={form}
            setForm={setForm}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={onSubmit}>
          Registrarse
        </button>
      </div>

      <div className="d-flex flex-column m-2">
        <span className="text-center my-2">¿Ya tienes una cuenta?</span>
        <NavLink className="btn btn-primary text-centers m-auto" to="/login">
          Iniciar Sesión
        </NavLink>
      </div>
    </main>
  );
}
