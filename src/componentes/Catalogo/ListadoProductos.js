import Producto from "./Producto";

export default function ListadoProductos({ productos }) {
    return (
        <div>
            <h2 className="text-center fw-bold my-5">Productos</h2>
            <div className="container my-5">
                <div className="row">
                    {
                        productos.length > 0 ?
                            productos ? productos.map((producto, i) => {
                                return <Producto info={producto} key={i} />
                            }) : ""

                            :
                            <div className="text-center text-body-secondary fs-4 d-flex align-items-center justify-content-center p-5">
                                No se han encontrado Productos
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}