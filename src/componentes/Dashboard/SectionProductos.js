import { useState } from "react";

import axios from "axios";

import CardProducto from "./Productos/CardProducto";
import ModalProducto from "./Productos/ModalProducto";

export default function SectionProductos({ catalogo, actualizarUsuario }) {
  const [producto, setProducto] = useState({});

  async function eliminarCategoriaVacia(categoria) {
    const productos = (
      await axios(
        `http://localhost:8080/NetMarket/api/producto/categoria/${categoria.id}`
      )
    ).data;

    if (productos.length === 0) {
      await axios.delete(
        `http://localhost:8080/NetMarket/api/categoria/${categoria.id}`
      );
    }
  }

  async function getCategorias(producto) {
    try {
      const listaCategorias = (
        await axios.get(
          `http://localhost:8080/NetMarket/api/categoria/producto/${producto.id}`
        )
      ).data;

      return listaCategorias;
    } catch (error) {
      console.error(error);
    }
  }

  return catalogo ? (
    <div className="container p-5">
      <ModalProducto
        id="modalAgregarProducto"
        type="agregar"
        catalogo={catalogo}
        actualizarUsuario={actualizarUsuario}
      />
      <ModalProducto
        producto={producto}
        id="modalEditarProducto"
        type="editar"
        catalogo={catalogo}
        actualizarUsuario={actualizarUsuario}
        getCategorias={getCategorias}
        eliminarCategoriaVacia={eliminarCategoriaVacia}
      />

      <div className="d-flex align-items-center justify-content-between ">
        <h1 className="fw-bold">Productos</h1>
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#modalAgregarProducto"
        >
          Agregar
        </button>
      </div>

      <div className="m-5">
        {catalogo.productos.length !== 0 ? (
          catalogo.productos.map((p, i) => {
            return (
              <CardProducto
                setProducto={setProducto}
                producto={p}
                actualizarUsuario={actualizarUsuario}
                getCategorias={getCategorias}
                eliminarCategoriaVacia={eliminarCategoriaVacia}
                key={i}
              />
            );
          })
        ) : (
          <p className="text-center fw-bold fs-2 m-5 text-body-secondary">
            No hay productos
          </p>
        )}
      </div>
    </div>
  ) : (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <p className="fs-1 fw-bold text-center">No hay Catálogos</p>
    </div>
  );

  //     const [list, setList] = useState([]);

  //     useEffect(() => {
  //         fetchData();
  //     }, [setList]);

  //     const fetchData = async () => {
  //         try {
  //             const response = await axios({
  //                 url: "http://localhost:8080/Turismo/api/apiturista/turista",
  //             });
  //             setList(response.data);
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };

  //     const deleteProducto = async (id) => {
  //         let isDelete = window.confirm(
  //             `¿Estás seguro de eliminar el registro con el id '${id}'?`
  //         );
  //         if (isDelete) {
  //             try {
  //                 await axios.delete(
  //                     `http://localhost:8080/Turismo/api/apiturista/turista/${id}`
  //                 );
  //                 console.log("si");
  //             } catch (error) {
  //                 console.log(error);
  //             }
  //         };

  //         fetchData();

  //     };
  //     return (
  //         <TablaProductos data={list} deleteProducto={deleteProducto} />
  //     )
}
