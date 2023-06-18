import axios from "axios";
import { useEffect, useState } from "react";

export default function CardProducto({
  producto,
  setProducto,
  actualizarUsuario,
  getCategorias,
  eliminarCategoriaVacia,
}) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async () => {
      const c = await getCategorias(producto);
      await setCategorias(c);
    })();
  }, [producto]);

  async function eliminarProducto() {
    try {
      await axios.delete(
        `http://localhost:8080/NetMarket/api/producto/${producto.id}`
      );

      for (const c of categorias) {
        await eliminarCategoriaVacia(c);
      }

      await actualizarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="card mb-3 w-100 p-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 d-flex flex-column p-2">
            <div
              className="rounded col "
              style={{
                position: "relative",
                overflow: "hidden",
                paddingBottom: "100%",
              }}
            >
              <img
                className="position-absolute top-50 start-50 translate-middle w-100 rounded"
                src={producto.foto}
                alt=""
              ></img>
            </div>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEditarProducto"
                  onClick={() => setProducto(producto)}
                >
                  Editar
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary w-100"
                  onClick={eliminarProducto}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="card-body align-items-center">
              <h2 className="card-title fw-bold">{producto.nombre}</h2>
              <p className="fs-4 fw-bold text-body-secondary">
                {new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                }).format(producto.precio)}
              </p>
              <p className="card-text">{producto.descripcion}</p>

              {categorias.map((c, i) => {
                return (
                  <div
                    key={i}
                    className="badge fw-semibold m-1 text-bg-primary"
                  >
                    {c.nombre}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
