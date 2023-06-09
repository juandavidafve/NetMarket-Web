import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({ info }) {
    return (
        <header>
            <div className="h-100 p-5" style={{
                backgroundImage: "url(" + info.banner + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="container">
                    <div className="row">
                        <img className="col-5" src={info.logo}></img>
                        <div className="col-7 my-auto">
                            <h1 className="fw-bold">{info.nombre}</h1>
                            <p className="fw-medium">{info.descripcion}</p>
                            <nav>
                                <ul className="d-flex list-unstyled">
                                    {
                                        info.telefono !== "" ?
                                            <li className="p-2 m-2">
                                                <a href={`tel://${info.telefono}`} className="text-decoration-none">
                                                    <FontAwesomeIcon icon="fa-solid fa-phone" className="mx-2" />
                                                    {info.telefono}
                                                </a>
                                            </li> : ""
                                    }
                                    {
                                        info.direccion !== "" ?
                                            <li className="p-2 m-2">
                                                <a href={`https://www.google.com/maps/search/${info.direccion}`} className="text-decoration-none">
                                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" className="mx-2" />
                                                    {info.direccion}
                                                </a>
                                            </li> : ""
                                    }
                                </ul>
                            </nav>
                            <nav>
                                <ul className="d-flex list-unstyled">
                                    {
                                        info.twitter !== "" ?
                                            <li className="p-2 m-2">
                                                <a href={info.twitter} className="text-decoration-none">
                                                    <FontAwesomeIcon icon="fa-brands fa-twitter" className="mx-2" />
                                                    Twitter
                                                </a>
                                            </li> : ""
                                    }
                                    {
                                        info.facebook !== "" ?
                                            <li className="p-2 m-2">
                                                <a href={info.facebook} className="text-decoration-none">
                                                    <FontAwesomeIcon icon="fa-brands fa-facebook" className="mx-2" />
                                                    Facebook
                                                </a>
                                            </li> : ""
                                    }
                                    {
                                        info.whatsapp !== "" ?
                                            <li className="p-2 m-2">
                                                <a href={info.whatsapp} className="text-decoration-none">
                                                    <FontAwesomeIcon icon="fa-brands fa-whatsapp" className="mx-2" />
                                                    Whatsapp
                                                </a>
                                            </li> : ""
                                    }
                                    {
                                        info.instagram !== "" ?
                                            <li className="p-2 m-2">
                                                <a href={info.instagram} className="text-decoration-none">
                                                    <FontAwesomeIcon icon="fa-brands fa-instagram" className="mx-2" />
                                                    Instagram
                                                </a>
                                            </li> : ""
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}