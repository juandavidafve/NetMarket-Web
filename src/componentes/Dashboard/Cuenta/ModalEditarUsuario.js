import { useState } from "react";
import axios from "axios";

import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../../../firebase";

import Input from "../../Input";
import Error from "../../Error";

export default function ModalEditarUsuario({ usuario, actualizarUsuario }) {
  const [form, setForm] = useState({ ...usuario, password: "", password2: "" });
  const [status, setStatus] = useState("");
  const [modalTrigger, setModdalTrigger] = useState(0);

  async function editarUsuario() {
    try {
      let contrasenaValida = true;

      if (form.password.length > 0) {
        if (form.password === form.password2) {
          await updatePassword(auth.currentUser, form.password);
        } else {
          contrasenaValida = false;
          setStatus("Los campos de contraseña no coinciden");
          setModdalTrigger(modalTrigger + 1);
        }
      }

      if (contrasenaValida) {
        await updateEmail(auth.currentUser, form.correo);

        await axios.put(
          "https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/usuario/",
          form
        );

        await actualizarUsuario();
      }
    } catch (error) {
      console.error(error);
      setStatus(error.message);
      setModdalTrigger(modalTrigger + 1);
    }
  }

  return (
    <>
      <Error mensaje={status} modalTrigger={modalTrigger} />
      <div className="modal fade" id="modalEditarUsuario" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editar Usuario
              </h1>
            </div>
            <div className="modal-body">
              <Input
                label="Nombre"
                name="nombre"
                type="text"
                placeholder="Zapatos Air Max"
                form={form}
                setForm={setForm}
                value={form.nombre}
              />
              <Input
                label="Correo"
                name="correo"
                type="email"
                value={form.correo}
                placeholder="usuario@test.com"
                form={form}
                setForm={setForm}
              />
              <Input
                label="Cambiar Contraseña"
                name="password"
                type="password"
                form={form}
                setForm={setForm}
              />
              {form.password.length > 0 ? (
                <Input
                  label="Repite la Contraseña"
                  name="password2"
                  type="password"
                  form={form}
                  setForm={setForm}
                />
              ) : (
                ""
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={editarUsuario}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
