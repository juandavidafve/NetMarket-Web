import { useEffect, useState } from "react";

import Sidebar from "../componentes/Dashboard/Sidebar";

import SectionCatalogo from "../componentes/Dashboard/SectionCatalogo";
import SectionCuenta from "../componentes/Dashboard/SectionCuenta";
import SectionProductos from "../componentes/Dashboard/SectionProductos";

export default function Dashboard({ usuario, actualizarUsuario }) {
  const [seccion, setSeccion] = useState("catalogo");
  const [indexCatalogo, setIndexCatalogo] = useState(0);
  const [catalogo, setCatalogo] = useState(null);

  useEffect(() => {
    if (usuario.catalogos) {
      setCatalogo(usuario.catalogos[indexCatalogo]);
    }
  }, [indexCatalogo, usuario]);

  return (
    <div>
      <Sidebar
        seccion={seccion}
        setSeccion={setSeccion}
        catalogo={catalogo}
        setIndexCatalogo={setIndexCatalogo}
        usuario={usuario}
        actualizarUsuario={actualizarUsuario}
      />

      <div
        className="w-80"
        style={{
          width: "calc(100% - 200px)",
          marginLeft: "200px",
        }}
      >
        {seccion === "catalogo" ? (
          <SectionCatalogo
            setIndexCatalogo={setIndexCatalogo}
            catalogo={catalogo}
            actualizarUsuario={actualizarUsuario}
          />
        ) : (
          ""
        )}
        {seccion === "productos" ? (
          <SectionProductos
            catalogo={catalogo}
            actualizarUsuario={actualizarUsuario}
          />
        ) : (
          ""
        )}
        {seccion === "cuenta" ? (
          <SectionCuenta
            usuario={usuario}
            actualizarUsuario={actualizarUsuario}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
