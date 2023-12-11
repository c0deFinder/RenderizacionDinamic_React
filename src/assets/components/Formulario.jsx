
import { useState } from 'react'
const  Formulario = ({ agregarColaborador, handleAlerta })=> {
    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: '',
    });

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (datos.nombre === '' || datos.correo === '' || datos.edad === '' || datos.cargo === '' || datos.telefono=== '') {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'Todos los campos son obligatorios',
                color: "danger",
                
            })
            console.log(handleSubmit)
            return;
        }
        
        if (datos.edad <= 0 || isNaN(datos.edad) ) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'La edad debe ser un numero positivo',
                color: "danger",
            })
            return;
        }

        if (datos.telefono < 0 || isNaN(datos.telefono) ) {
            handleAlerta({
                tipo: 'danger',
                mensaje: 'El telefono debe ser un numero',
                color: "danger",
            })
            return;
        }
        agregarColaborador({ ...datos });
        setDatos({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: '',
        })
    }

    return (
        <form className="mb-2 pb-2 justify-content-center" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del colaborador"
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="correo"
          className="form-control"
          placeholder="Email del colaborador"
          value={datos.correo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="edad"
          className="form-control"
          placeholder="Edad del colaborador"
          value={datos.edad}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="cargo"
          className="form-control"
          placeholder="Cargo del colaborador"
          value={datos.cargo}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          name="telefono"
          className="form-control"
          placeholder="Teléfono del colaborador"
          value={datos.telefono}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Agregar colaborador
      </button>
    </form>
    )
}

export default Formulario