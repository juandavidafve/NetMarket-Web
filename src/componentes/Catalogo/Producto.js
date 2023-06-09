export default function Producto({ info }) {

    return (
        <div className="col-4 text-center my-4">
            <div className="rounded" style={{
                position: "relative",
                overflow: "hidden",
                paddingBottom: "100%",
            }}>
                <img className="position-absolute top-50 start-50 translate-middle w-100 rounded" src={info.foto}></img>
            </div>
            <p className="fw-bold fs-3">{info.nombre}</p>

            <p className="text-start">{info.descripcion}</p>
            <p className="fs-4">{
                (new Intl.NumberFormat('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                })).format(info.precio)
            }</p>
        </div>
    )
}