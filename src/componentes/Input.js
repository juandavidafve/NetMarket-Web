export default function Input({ label, name, type, placeholder, form, setForm }) {

    function handleChange(e) {
        let formCopia = {
            ...form
        }

        formCopia[e.target.name] = e.target.value;
        setForm(formCopia);
    }

    return (
        <div className='d-flex flex-column align-items-start m-2'>
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <input
                className='my-auto form-control'
                id={name}
                name={name}
                type={type}
                required
                placeholder={placeholder}
                onChange={handleChange}
            />
        </div>
    )
}