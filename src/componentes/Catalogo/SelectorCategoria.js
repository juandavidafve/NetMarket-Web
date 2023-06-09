import { useEffect, useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle';

export default function SelectorCategoria({ categorias, actualizarProductos }) {

    let [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
        nombre: "Todos",
        id: -1,
    });

    async function handleClick(e) {
        const i = e.target.value;

        if (i == -1) {
            await setCategoriaSeleccionada({
                nombre: "Todos",
                id: -1,
            });
        } else {
            await setCategoriaSeleccionada(categorias[i]);
        }
    }

    async function actualizar() {
        await actualizarProductos(categoriaSeleccionada);
    }

    useEffect(() => {
        (async () => { await actualizar() })()
    }, [categoriaSeleccionada]);

    return (
        <div className="dropdown m-5 d-flex justify-content-end">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categoria: {categoriaSeleccionada.nombre}
            </button>
            <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={handleClick} value="-1">Todos</li>
                {
                    categorias.map((categoria, i) => {
                        return <li className="dropdown-item" onClick={handleClick} value={i} key={i} >{categoria.nombre}</li>
                    })
                }
            </ul>
        </div>
    )
}