import { useState } from "react";
import CardProducto from "./Productos/CardProducto";
import ModalProducto from "./Productos/ModalProducto";

export default function SectionProductos({ catalogo, actualizarUsuario }) {
  const [producto, setProducto] = useState({});

  return catalogo ? (
    <div className="container p-5">
      <ModalProducto
        catalogo={catalogo}
        actualizarUsuario={actualizarUsuario}
        id="modalAgregarProducto"
        type="agregar"
      />
      <ModalProducto
        producto={producto}
        actualizarUsuario={actualizarUsuario}
        id="modalEditarProducto"
        type="editar"
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
  //                 url: "https://52fa-190-90-86-70.ngrok-free.app/Turismo/api/apiturista/turista",
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
  //                     `https://52fa-190-90-86-70.ngrok-free.app/Turismo/api/apiturista/turista/${id}`
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
