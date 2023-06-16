export default function Card (){
    return (
        <div className="card mb-3" style={{maxWidth: "80%"}} >
            <div className="row g-0 ">
                <div className="col-md-4 align-items-center">
                    <img src="https://pbs.twimg.com/media/FD8w5dkUcAsO2mN.png" className="img-fluid rounded-start" alt="..."></img>
                    <a href="#" class="btn btn-primary m-1">Editar</a>
                    <a href="#" class="btn btn-secondary m-1">Eliminar</a>
                </div>
                <div className="col-md-8">
                    <div className="card-body align-items-center">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="p-0.3 mb-2 bg-primary text-white rounded ps-2 me-5" width="10">Categoria 1</div>
                        <div class="p-0.3 mb-2 bg-primary text-white rounded ps-2 me-5">Categoria 2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}