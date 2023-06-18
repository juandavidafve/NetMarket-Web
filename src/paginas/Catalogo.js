import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Header from "../componentes/Catalogo/Header";
import SelectorCategoria from "../componentes/Catalogo/SelectorCategoria";
import ListadoProductos from "../componentes/Catalogo/ListadoProductos";

export default function Catalogo() {
  let { id } = useParams();

  const [info, setInfo] = useState({});
  const [encontrado, setEncontrado] = useState(false);

  const [productosMostrados, setProductosMostrados] = useState([]);

  async function actualizarInfo() {
    try {
      const response = await axios({
        url: `http://localhost:8080/NetMarket/api/catalogo/${id}`,
      });
      if (response.headers["content-length"] > 0) {
        setEncontrado(true);
        setInfo(response.data);
        setProductosMostrados(response.data.productos);

        // cambiar titulo de la pagina
        document.title = response.data.nombre;

        // cambiar icono de la pagina
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
          link = document.createElement("link");
          link.rel = "icon";
          document.head.appendChild(link);
        }
        link.href = response.data.logo;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getProductosPorCategoria(categoria) {
    try {
      if (categoria.id !== -1) {
        const response = await axios({
          url: `http://localhost:8080/NetMarket/api/producto/categoria/${categoria.id}`,
        });
        setProductosMostrados(response.data);
      } else {
        setProductosMostrados(info.productos);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      await actualizarInfo();
    })();
  }, []);

  if (!encontrado) {
    return (
      <div className="text-center fw-bold fs-1 d-flex align-items-center justify-content-center vw-100 vh-100">
        Catálogo no encontrado
      </div>
    );
  }

  return (
    <div>
      <Header info={info} />
      <main>
        <SelectorCategoria
          categorias={info.categorias}
          actualizarProductos={getProductosPorCategoria}
        />
        <ListadoProductos productos={productosMostrados} />
      </main>
    </div>
  );
}
