import FilaProducto from './FilaProducto';

const TablaTurista = ({ data,deleteProducto }) => {
    return (
        <div>
            <div class="text-bg-primary p-3"><center><h3>TABLA DE PRODUCTOS</h3></center></div>
            <table class="table table-striped">
                <thead>
                    <th>Nombre</th>
                    <th>Foto</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                </thead>
                <tbody>
                    {
                        data.length > 0 ? (
                            data.map((producto) => (
                                <FilaProducto
                                    key={producto.id}
                                    tie={producto}
                                    deleteProducto = {deleteProducto}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6"><center><img alt="img" src="https://art.ngfiles.com/images/1442000/1442802_amni3d_3d-among-us-gifs.gif"/></center></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablaTurista;