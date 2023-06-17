import { useEffect, useState } from "react";
import axios from "axios";

import Input from "../../Input";

export default function ModalProducto({
  actualizarUsuario,
  catalogo,
  producto,
  id,
  type,
}) {
  const [form, setForm] = useState({ ...producto });

  useEffect(() => {
    setForm({ ...producto });
  }, [producto]);

  async function agregarProducto() {
    try {
      await axios.post(
        "https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/producto/",
        {
          producto: {
            id: Math.floor(Math.random() * 10000),
            ...form,
          },
          catalogo,
        }
      );

      await actualizarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  async function editarProducto() {
    console.log("e");
    try {
      await axios.put(
        "https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/producto/",
        form
      );

      await actualizarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="modal fade" id={id} tabindex="-1">
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
              placeholder="Zapatos Air Max"
              form={form}
              setForm={setForm}
              value={form.nombre}
            />
            <Input
              label="Foto"
              name="foto"
              type="text"
              placeholder="https://placehold.co/600x400"
              form={form}
              setForm={setForm}
              value={form.foto}
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
              value={form.precio}
            />
            <Input
              label="Descripción"
              name="descripcion"
              type="textarea"
              placeholder="Estas zapatillas para hombre tienen una parte superior de cuero sintético y malla, una unidad Max Air en el talón para mayor amortiguación y una suela de goma duradera."
              form={form}
              setForm={setForm}
              value={form.descripcion}
            />
            <Input
              label="Categorías"
              name="categorias"
              type="textarea"
              splitMultiline="true"
              placeholder={"Categoría 1\nCategoría 2"}
              form={form}
              setForm={setForm}
              value={form.categorias}
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
