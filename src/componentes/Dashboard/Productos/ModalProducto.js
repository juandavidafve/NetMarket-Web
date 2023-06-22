import { useEffect, useState } from "react";
import axios from "axios";

import Input from "../../Input";

export default function ModalProducto({
  catalogo,
  producto,
  id,
  type,
  actualizarUsuario,
  getCategorias,
  eliminarCategoriaVacia,
}) {
  const [form, setForm] = useState({ ...producto });
  const [textoCategorias, setTextoCategorias] = useState("");

  useEffect(() => {
    (async () => {
      if (producto && producto.id) {
        const listaCategorias = await getCategorias(producto);
        const texto = listaCategorias.map((c) => c.nombre).join("\n");
        await setTextoCategorias(texto);

        await setForm({ ...producto, categorias: [] });
      }
    })();
  }, [producto]);

  function parseCategorias() {
    let listaCategorias = [];

    if (form.categorias) {
      form.categorias.forEach((c) => {
        const lista = catalogo.categorias.filter((e) => {
          return e.nombre == c;
        });

        if (lista.length > 0) {
          listaCategorias.push(lista[0]);
        } else {
          listaCategorias.push({
            nombre: c,
          });
        }
      });
    }

    return listaCategorias;
  }

  async function agregarListaCategorias(producto, listaCategorias) {
    for (const c of listaCategorias) {
      let categoria = c;
      if (!c.id) {
        categoria = (
          await axios.post("http://localhost:8080/NetMarket/api/categoria", {
            catalogo,
            categoria: {
              id: Math.floor(Math.random() * 10000),
              ...categoria,
            },
          })
        ).data.categoria;
      }

      await axios.post(
        "http://localhost:8080/NetMarket/api/productocategoria/",
        {
          producto,
          categoria,
        }
      );
    }
  }

  async function eliminarListaCategorias(producto, listaCategorias) {
    for (const c of listaCategorias) {
      await axios.delete(
        `http://localhost:8080/NetMarket/api/productocategoria/${producto.id}/${c.id}`
      );

      await eliminarCategoriaVacia(c);
    }
  }

  async function agregarProducto() {
    const listaCategorias = parseCategorias();

    try {
      const producto = (
        await axios.post("http://localhost:8080/NetMarket/api/producto/", {
          producto: {
            id: Math.floor(Math.random() * 10000),
            ...form,
          },
          catalogo,
        })
      ).data.producto;

      await agregarListaCategorias(producto, listaCategorias);

      await actualizarUsuario();
    } catch (error) {
      console.error(error);
    }
  }

  async function editarProducto() {
    try {
      await axios.put("http://localhost:8080/NetMarket/api/producto/", form);

      // obtener categorias antiguas
      let categoriasOld = await getCategorias(producto);

      // obtener nuevas categorias
      const listaCategorias = parseCategorias();

      const listaAgregar = [];
      const listaEliminar = [];

      for (let c of categoriasOld) {
        if (!listaCategorias.filter((e) => e.nombre === c.nombre).length > 0) {
          listaEliminar.push(c);
        }
      }

      for (let c of listaCategorias) {
        if (!categoriasOld.filter((e) => e.nombre === c.nombre).length > 0) {
          listaAgregar.push(c);
        }
      }

      await agregarListaCategorias(producto, listaAgregar);
      await eliminarListaCategorias(producto, listaEliminar);

      await actualizarUsuario();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="modal fade" id={id} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {type === "agregar" ? "Agregar Producto" : "Editar Producto"}
            </h1>
          </div>
          <div className="modal-body">
            <Input
              label="Nombre"
              name="nombre"
              type="text"
              placeholder="Nombre del producto"
              form={form}
              setForm={setForm}
              defaultValue={form.nombre}
            />
            <Input
              label="Foto"
              name="foto"
              type="text"
              placeholder="https://ejemplo.com/producto.jpg"
              form={form}
              setForm={setForm}
              defaultValue={form.foto}
            />
            {form.foto ? (
              <img className="w-100" src={form.foto} alt=""></img>
            ) : (
              ""
            )}
            <Input
              label="Precio"
              name="precio"
              type="number"
              placeholder="100000"
              form={form}
              setForm={setForm}
              defaultValue={form.precio}
            />
            <Input
              label="Descripción"
              name="descripcion"
              type="textarea"
              placeholder="Descripción del producto..."
              form={form}
              setForm={setForm}
              defaultValue={form.descripcion}
            />
            <Input
              label="Categorías"
              name="categorias"
              type="textarea"
              splitMultiline="true"
              placeholder={"Categoría 1\nCategoría 2\nCategoría 3"}
              form={form}
              setForm={setForm}
              defaultValue={textoCategorias}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={type === "agregar" ? agregarProducto : editarProducto}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
