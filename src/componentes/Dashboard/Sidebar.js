import { auth } from '../../firebase';
import { signOut } from "firebase/auth";

import axios from "axios";

export default function Sidebar({ seccion, setSeccion, catalogo, setCatalogo, usuario, actualizarUsuario }) {

    function handleClickSeccion(e) {
        setSeccion(e.target.dataset.page);
    }

    async function handleClickCatalogo(e) {
        await buscarCatalogo(e.target.dataset.idCatalogo);
    }

    function cerrarSesion() {
        signOut(auth).then(() => {
            console.log("Signed out successfully")
        }).catch((error) => {
            console.error(error);
        });
    }

    async function buscarCatalogo(id) {
        try {
            const response = await axios({
                url: `http://10.18.47.101:8080/NetMarket/api/catalogo/${id}`
            });
            if (response.headers["content-length"] > 0) {
                await setCatalogo(response.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    async function agregarCatalogo() {
        const nombre = prompt("Ingrese el nombre del catalogo");

        try {
            const res = await axios.post("http://10.18.47.101:8080/NetMarket/api/catalogo/", {
                catalogo: {
                    id: Math.floor(Math.random() * 10000),
                    nombre,
                    descripcion: "",
                    logo: "",
                    banner: "",
                    telefono: "",
                    direccion: "",
                    twitter: "",
                    facebook: "",
                    whatsapp: "",
                    instagram: ""
                },
                usuario
            });
            actualizarUsuario();
        }
        catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="ww-20 vh-100 d-flex flex-column p-3 text-white align-items-center " style={{
            position: "fixed",
            backgroundColor: "rgba(36, 53, 115, 1)"
        }}>
            <a href="/" className="d-flex pe-5 text-white text-decoration-none">
                <svg className="bi  ms-1 " width="20" height="32"><use href="#bootstrap"></use></svg>
                <img src="https://i.pinimg.com/originals/1a/15/2f/1a152fa234d589ebc6c8200d25df54cc.png" alt="" width="30" height="32" className=""></img>
                <span className="fs-4 ps-2">NetMarket</span>
            </a>
            <hr></hr>
            <div className="dropdown ">
                <a href="#" className="text-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    {catalogo.nombre ? catalogo.nombre : "Seleccionar Catalogo"}
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    {
                        usuario.catalogos.map((e, i) => {
                            return <li><button className="dropdown-item" data-id-catalogo={e.id} onClick={handleClickCatalogo}>{e.nombre}</button></li>
                        })
                    }
                </ul>
            </div>
            <hr></hr>
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                    <button className={"nav-link " + (seccion === "Catalogo" ? "active" : "text-white")} onClick={handleClickSeccion} data-page="Catalogo">
                        Catalogo
                    </button>
                </li>
                <li className="nav-item">
                    <button className={"nav-link " + (seccion === "productos" ? "active" : "text-white")} onClick={handleClickSeccion} data-page="productos">
                        Productos
                    </button>
                </li>
            </ul>
            <hr></hr>
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" className="rounded-circle me-2" width="32" height="32"></img>
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li>
                        <button className="dropdown-item" onClick={agregarCatalogo}>Agregar Catalogo</button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={handleClickSeccion} data-page="cuenta">Cuenta</button>
                    </li>
                    <li>
                        <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={cerrarSesion}>Cerrar Sesion</button>
                    </li>
                </ul>
            </div>
        </div>
    )
