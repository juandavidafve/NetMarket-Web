export default function Input({
  label,
  name,
  type,
  placeholder,
  form,
  setForm,
  value = "",
  splitMultiline = false,
}) {
  function handleChange(e) {
    let formCopia = {
      ...form,
    };

    if (e.target.nodeName === "TEXTAREA" && splitMultiline) {
      formCopia[e.target.name] = e.target.value.split("\n");
    } else {
      formCopia[e.target.name] = e.target.value;
    }

    setForm(formCopia);
  }

  return (
    <div className="d-flex flex-column align-items-start m-2">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      {type !== "textarea" ? (
        <input
          className="my-auto form-control"
          id={name}
          name={name}
          type={type}
          defaultValue={value}
          required
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <textarea
          className="my-auto form-control"
          id={name}
          name={name}
          defaultValue={value}
          required
          placeholder={placeholder}
          onChange={handleChange}
        ></textarea>
      )}
    </div>
  );
}
