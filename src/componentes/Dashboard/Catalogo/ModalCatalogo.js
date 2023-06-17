import { useState } from "react";
import axios from "axios";

import Input from "../../Input";

export default function ModalCatalogo({
  catalogo,
  usuario,
  actualizarUsuario,
  id,
  type,
}) {
  const [form, setForm] = useState(
    catalogo && type === "editar"
      ? catalogo
      : {
          nombre: "",
          descripcion: "",
          logo: "",
          banner: "",
          telefono: "",
          direccion: "",
          twitter: "",
          facebook: "",
          whatsapp: "",
          instagram: "",
        }
  );

  async function agregarCatalogo() {
    try {
      await axios.post(
        "https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/catalogo/",
        {
          catalogo: {
            id: Math.floor(Math.random() * 10000),
            ...form,
          },
          usuario,
        }
      );
      actualizarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  async function editarCatalogo() {
    try {
      await axios.put(
        "https://52fa-190-90-86-70.ngrok-free.app/NetMarket/api/catalogo/",
        form
      );

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
              {type === "editar" ? "Editar Catálogo" : "Agregar Catálogo"}
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
              label="Descripción"
              name="descripcion"
              type="textarea"
              value={form.descripcion}
              placeholder="Estas zapatillas para hombre tienen una parte superior de cuero sintético y malla, una unidad Max Air en el talón para mayor amortiguación y una suela de goma duradera."
              form={form}
              setForm={setForm}
            />
            <Input
              label="Logo"
              name="logo"
              type="text"
              placeholder="https://placehold.co/600x400"
              value={form.logo}
              form={form}
              setForm={setForm}
            />
            {form.logo ? (
              <img className="w-100" src={form.logo} alt=""></img>
            ) : (
              ""
            )}

            <Input
              label="Banner"
              name="banner"
              type="text"
              placeholder="https://placehold.co/1600x400"
              value={form.banner}
              form={form}
              setForm={setForm}
            />
            {form.banner ? (
              <img className="w-100" src={form.banner} alt=""></img>
            ) : (
              ""
            )}

            <Input
              label="Teléfono"
              name="telefono"
              type="text"
              placeholder="+1 234 5678910"
              form={form}
              setForm={setForm}
              value={form.telefono}
            />
            <Input
              label="Dirección"
              name="direccion"
              type="text"
              placeholder="direccion"
              form={form}
              setForm={setForm}
              value={form.direccion}
            />
            <Input
              label="Twitter"
              name="twitter"
              type="text"
              placeholder="@username"
              form={form}
              setForm={setForm}
              value={form.twitter}
            />
            <Input
              label="Facebook"
              name="facebook"
              type="text"
              placeholder="facebook"
              form={form}
              setForm={setForm}
              value={form.facebook}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              type="text"
              placeholder="whatsapp"
              form={form}
              setForm={setForm}
              value={form.whatsapp}
            />
            <Input
              label="Instagram"
              name="instagram"
              type="text"
              placeholder="instagram"
              form={form}
              setForm={setForm}
              value={form.instagram}
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
              onClick={type === "editar" ? editarCatalogo : agregarCatalogo}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
