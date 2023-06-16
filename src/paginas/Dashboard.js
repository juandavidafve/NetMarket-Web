import { useState } from 'react';

import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import Sidebar from "../componentes/Dashboard/Sidebar";

import SectionCatalogo from '../componentes/Dashboard/SectionCatalogo';
import SectionCuenta from '../componentes/Dashboard/SectionCuenta';
import SectionProductos from '../componentes/Dashboard/SectionProductos';

export default function Dashboard({ usuario, actualizarUsuario }) {
    const [seccion, setSeccion] = useState("catalogo");
    const [catalogo, setCatalogo] = useState(usuario.catalogos[0]);

    return (
        <div>
            <Sidebar seccion={seccion} setSeccion={setSeccion} catalogo={catalogo} setCatalogo={setCatalogo} usuario={usuario} actualizarUsuario={actualizarUsuario} />

            <div className="w-80" style={{
                marginLeft: "20%"
            }}>

                {
                    seccion == "catalogo" ? <SectionCatalogo /> : "" 
                }
                {
                    seccion == "productos" ? <SectionProductos catalogo={catalogo}/> : ""
                }
                {
                    seccion == "cuenta" ? <SectionCuenta /> : ""
                }

            </div>
            
        </div>
    )
}