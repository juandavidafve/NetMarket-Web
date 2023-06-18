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
      await axios.post("http://localhost:8080/NetMarket/api/catalogo/", {
        catalogo: {
          id: Math.floor(Math.random() * 10000),
          ...form,
        },
        usuario,
      });
      actualizarUsuario();
    } catch (error) {
      console.log(error);
    }
  }

  async function editarCatalogo() {
    try {
      await axios.put("http://localhost:8080/NetMarket/api/catalogo/", form);

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
              placeholder="Catálogo de productos"
              form={form}
              setForm={setForm}
              defaultValue={form.nombre}
            />
            <Input
              label="Descripción"
              name="descripcion"
              type="textarea"
              defaultValue={form.descripcion}
              placeholder="Escribe una breve descripción del catálogo..."
              form={form}
              setForm={setForm}
            />
            <Input
              label="Logo"
              name="logo"
              type="text"
              placeholder="https://ejemplo.com/logo.jpg"
              defaultValue={form.logo}
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
              placeholder="https://ejemplo.com/banner.jpg"
              defaultValue={form.banner}
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
              defaultValue={form.telefono}
            />
            <Input
              label="Dirección"
              name="direccion"
              type="text"
              placeholder="Calle Principal 123, Ciudad, País"
              form={form}
              setForm={setForm}
              defaultValue={form.direccion}
            />
            <Input
              label="Twitter"
              name="twitter"
              type="text"
              placeholder="https://twitter.com/ejemplo"
              form={form}
              setForm={setForm}
              defaultValue={form.twitter}
            />
            <Input
              label="Facebook"
              name="facebook"
              type="text"
              placeholder="https://facebook.com/ejemplo"
              form={form}
              setForm={setForm}
              defaultValue={form.facebook}
            />
            <Input
              label="Whatsapp"
              name="whatsapp"
              type="text"
              placeholder="https://wa.me/1234567890"
              form={form}
              setForm={setForm}
              defaultValue={form.whatsapp}
            />
            <Input
              label="Instagram"
              name="instagram"
              type="text"
              placeholder="https://instagram.com/ejemplo"
              form={form}
              setForm={setForm}
              defaultValue={form.instagram}
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
