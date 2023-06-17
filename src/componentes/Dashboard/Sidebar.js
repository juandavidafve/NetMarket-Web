import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

import ModalCatalogo from "./Catalogo/ModalCatalogo";

export default function Sidebar({
  seccion,
  setSeccion,
  setIndexCatalogo,
  catalogo,
  usuario,
  actualizarUsuario,
}) {
  function handleClickSeccion(e) {
    setSeccion(e.target.dataset.page);
  }

  function handleClickCatalogo(e) {
    setIndexCatalogo(e.target.dataset.indexCatalogo);
  }

  function cerrarSesion() {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <ModalCatalogo
        catalogo={catalogo}
        usuario={usuario}
        actualizarUsuario={actualizarUsuario}
        id="modalCrearCatalogo"
        type="agregar"
      />

      <div
        className="vh-100 d-flex flex-column p-3 text-white align-items-center "
        style={{
          width: "200px",
          position: "fixed",
          backgroundColor: "rgba(36, 53, 115, 1)",
        }}
      >
        <a href="/" className="d-flex pe-5 text-white text-decoration-none">
          <svg className="bi  ms-1 " width="20" height="32">
            <use href="#bootstrap"></use>
          </svg>
          <img
            src="https://i.pinimg.com/originals/1a/15/2f/1a152fa234d589ebc6c8200d25df54cc.png"
            alt=""
            width="30"
            height="32"
            className=""
          ></img>
          <span className="fs-4 ps-2 fw-bold">NetMarket</span>
        </a>
        <hr></hr>
        <div className="dropdown ">
          <a
            href="#"
            className="text-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {catalogo ? catalogo.nombre : "Catálogos"}
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <button
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#modalCrearCatalogo"
                //onClick={agregarCatalogo}
              >
                Agregar Catalogo
              </button>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            {usuario.catalogos
              ? usuario.catalogos.map((e, i) => {
                  return (
                    <li>
                      <button
                        className="dropdown-item"
                        key={i}
                        data-index-catalogo={i}
                        onClick={handleClickCatalogo}
                      >
                        {e.nombre}
                      </button>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        <hr></hr>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <button
              className={
                "nav-link " + (seccion === "catalogo" ? "active" : "text-white")
              }
              onClick={handleClickSeccion}
              data-page="catalogo"
            >
              Catalogo
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                "nav-link " +
                (seccion === "productos" ? "active" : "text-white")
              }
              onClick={handleClickSeccion}
              data-page="productos"
            >
              Productos
            </button>
          </li>
        </ul>

        <hr></hr>
        <div className="dropdown">
          <a
            href="#"
            className="fw-bold d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {usuario.nombre}
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow text-center"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <button
                className="dropdown-item"
                onClick={handleClickSeccion}
                data-page="cuenta"
              >
                Cuenta
              </button>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <button className="dropdown-item" onClick={cerrarSesion}>
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
