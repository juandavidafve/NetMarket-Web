import axios from "axios";

import { deleteUser } from "firebase/auth";
import { auth } from "../../../firebase";

export default function ModalBorrarUsuario({ usuario }) {
  async function borrarUsuario() {
    await deleteUser(auth.currentUser);
    await axios.delete(
      `https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/usuario/${usuario.id}`
    );
  }

  return (
    <div className="modal fade" id="modalBorrarUsuario" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Borrar Usuario
            </h1>
          </div>
          <div className="modal-body">
            ¿Está seguro que desea borrar el usuario?. Esta acción es
            irreversible.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={borrarUsuario}
            >
              Aceptar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
