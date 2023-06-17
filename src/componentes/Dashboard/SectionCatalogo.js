import ModalCatalogo from "./Catalogo/ModalCatalogo";
import ModalBorrarCatalogo from "./Catalogo/ModalBorrarCatalogo";

export default function SectionCatalogo({
  catalogo,
  actualizarUsuario,
  setIndexCatalogo,
}) {
  return catalogo ? (
    <div className="container p-5">
      <ModalCatalogo
        catalogo={catalogo}
        actualizarUsuario={actualizarUsuario}
        id="modalEditarCatalogo"
        type="editar"
      />

      <ModalBorrarCatalogo
        catalogo={catalogo}
        actualizarUsuario={actualizarUsuario}
        setIndexCatalogo={setIndexCatalogo}
      />

      <div className="d-flex align-items-center justify-content-between">
        <h1 className="fw-bold">Catálogo</h1>
        <div>
          <button
            className="btn btn-secondary m-2"
            data-bs-toggle="modal"
            data-bs-target="#modalBorrarCatalogo"
          >
            Borrar
          </button>
          <button
            className="btn btn-primary m-2"
            data-bs-toggle="modal"
            data-bs-target="#modalEditarCatalogo"
          >
            Editar
          </button>
        </div>
      </div>

      <div className="m-5">
        <div>
          <span className="fw-bold">URL:</span>
          <a
            className="mx-2"
            href={window.location.origin + "/catalogo/" + catalogo.id}
            target="_blank"
            rel="noreferrer"
          >
            {window.location.origin + "/catalogo/" + catalogo.id}
          </a>
        </div>
        <div>
          <span className="fw-bold">Nombre del catálogo:</span>
          <span className="mx-2">{catalogo.nombre}</span>
        </div>
        <div>
          <span className="fw-bold">Descripción:</span>
          <p>{catalogo.descripcion}</p>
        </div>
        <div className="row">
          <div className="col-6">
            <p className="fw-bold">Logo:</p>
            <img className="w-100" src={catalogo.logo} alt=""></img>
          </div>
          <div className="col-6">
            <p className="fw-bold">Banner:</p>
            <img className="w-100" src={catalogo.banner} alt=""></img>
          </div>
        </div>
        <div>
          <p className="fw-bold">Contacto:</p>
          <ul>
            {catalogo.telefono ? (
              <li>
                <div>
                  <span className="fw-bold">Teléfono:</span>
                  <span className="mx-2">{catalogo.telefono}</span>
                </div>
              </li>
            ) : (
              ""
            )}
            {catalogo.direccion ? (
              <li>
                <div>
                  <span className="fw-bold">Dirección:</span>
                  <span className="mx-2">{catalogo.direccion}</span>
                </div>
              </li>
            ) : (
              ""
            )}
            {catalogo.twitter ? (
              <li>
                <div>
                  <span className="fw-bold">Twitter:</span>
                  <span className="mx-2">{catalogo.twitter}</span>
                </div>
              </li>
            ) : (
              ""
            )}
            {catalogo.facebook ? (
              <li>
                <div>
                  <span className="fw-bold">Facebook:</span>
                  <span className="mx-2">{catalogo.facebook}</span>
                </div>
              </li>
            ) : (
              ""
            )}
            {catalogo.whatsapp ? (
              <li>
                <div>
                  <span className="fw-bold">Whatsapp:</span>
                  <span className="mx-2">{catalogo.whatsapp}</span>
                </div>
              </li>
            ) : (
              ""
            )}
            {catalogo.instagram ? (
              <li>
                <div>
                  <span className="fw-bold">Instagram: </span>
                  <span className="mx-2">{catalogo.instagram}</span>
                </div>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <p className="fs-1 fw-bold text-center">No hay Catálogos</p>
    </div>
  );
}
