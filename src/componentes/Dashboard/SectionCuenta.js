import ModalEditarUsuario from "./Cuenta/ModalEditarUsuario";
import ModalBorrarUsuario from "./Cuenta/ModalBorrarUsuario";

export default function SectionCuenta({ usuario, actualizarUsuario }) {
  return (
    <div className="container">
      <ModalEditarUsuario
        usuario={usuario}
        actualizarUsuario={actualizarUsuario}
      />

      <ModalBorrarUsuario usuario={usuario} />

      <div className="d-flex align-items-center justify-content-between">
        <h1 className="fw-bold">Cuenta</h1>
        <div>
          <button
            className="btn btn-secondary m-2"
            data-bs-toggle="modal"
            data-bs-target="#modalBorrarUsuario"
          >
            Borrar
          </button>
          <button
            className="btn btn-primary m-2"
            data-bs-toggle="modal"
            data-bs-target="#modalEditarUsuario"
          >
            Editar
          </button>
        </div>
      </div>

      <div>
        <span className="fw-bold">Nombre:</span>
        <span className="mx-2">{usuario.nombre}</span>
      </div>

      <div>
        <span className="fw-bold">Correo:</span>
        <span className="mx-2">{usuario.correo}</span>
      </div>
    </div>
  );
}
