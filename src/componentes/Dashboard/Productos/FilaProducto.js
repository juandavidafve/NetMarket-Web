const FilaProducto = ({producto, deleteProducto}) => {    
    return (
       <tr>
        <td>{producto.nombre}</td>
        <td>{producto.foto}</td>
        <td>{producto.precio}</td>
        <td>{producto.descripcion}</td>
        <td>
            <button class="btn btn-primary" onClick={() => deleteProducto(producto.id)}>Eliminar</button>
            <button class="btn btn-secondary" >Editar</button>
        </td>
       </tr>
    );
};
export default FilaProducto;