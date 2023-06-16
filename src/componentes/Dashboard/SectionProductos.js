import TablaProductos from "./Productos/TablaProductos"
import Card from "./Productos/Card"
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function SectionProductos({ catalogo }) {

        return (

            
                JSON.stringify(catalogo)
               // catalogo.productos.map((p, i) => {
               //     return <Card />
               // })
            
        )

//     const [list, setList] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, [setList]);

//     const fetchData = async () => {
//         try {
//             const response = await axios({
//                 url: "http://localhost:8080/Turismo/api/apiturista/turista",
//             });
//             setList(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const deleteTurista = async (id) => {
//         let isDelete = window.confirm(
//             `¿Estás seguro de eliminar el registro con el id '${id}'?`
//         );
//         if (isDelete) {
//             try {
//                 await axios.delete(
//                     `http://localhost:8080/Turismo/api/apiturista/turista/${id}`
//                 );
//                 console.log("si");
//             } catch (error) {
//                 console.log(error);
//             }
//         };

//         fetchData();


//     };
//     return (
//         <TablaProductos data={list} deleteProducto={deleteProducto} />
//     )
}