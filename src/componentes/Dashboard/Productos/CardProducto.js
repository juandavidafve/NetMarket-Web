import axios from "axios";

export default function CardProducto({
  producto,
  actualizarUsuario,
  setProducto,
}) {
  async function eliminarProducto() {
    try {
      await axios.delete(
        `https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/producto/${producto.id}`
      );
      await actualizarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div className="col-4 align-items-center">
          <img
            src={producto.foto}
            className="img-fluid rounded-start w-100"
            alt="..."
          ></img>
          <div className="row">
            <button
              className="btn btn-primary col-5"
              data-bs-toggle="modal"
              data-bs-target="#modalEditarProducto"
              onClick={() => setProducto(producto)}
            >
              Editar
            </button>
            <button
              className="btn btn-secondary col-5 offset-2"
              onClick={eliminarProducto}
            >
              Eliminar
            </button>
          </div>
        </div>
        <div className="col-8">
          <div className="card-body align-items-center">
            <h5 className="card-title fw-bold fs-2">{producto.nombre}</h5>
            <p className="card-text">{producto.descripcion}</p>
            <div
              className="p-0.3 mb-2 bg-primary text-white rounded ps-2 me-5"
              width="10"
            >
              Categoria 1
            </div>
            <div className="p-0.3 mb-2 bg-primary text-white rounded ps-2 me-5">
              Categoria 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
