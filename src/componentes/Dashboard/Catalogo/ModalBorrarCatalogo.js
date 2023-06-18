import axios from "axios";

export default function ModalBorrarCatalogo({
  catalogo,
  actualizarUsuario,
  setIndexCatalogo,
}) {
  async function borrarCatalogo() {
    await axios.delete(
      `http://localhost:8080/NetMarket/api/catalogo/${catalogo.id}`
    );

    await setIndexCatalogo(0);
    await actualizarUsuario();
  }

  return (
    <div className="modal fade" id="modalBorrarCatalogo" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Borrar Catálogo
            </h1>
          </div>
          <div className="modal-body">
            ¿Está seguro que desea borrar el catálogo?. Esta acción es
            irreversible.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={borrarCatalogo}
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
