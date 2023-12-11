import { useState } from 'react'
import Buscador from './assets/components/Buscador'
import Formulario from './assets/components/Formulario'
import Listado from './assets/components/listado'
import Alert from './assets/components/Alert'
import { BaseColaboradores } from './BaseColaboradores'


let index = BaseColaboradores.length



function App() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const agregarColaborador = (NuevoColaborador) => {
      setColaboradores(colaborador => [...colaborador, { ...NuevoColaborador, id: index++ }]);
      setAlerta({ tipo: 'warning', mensaje: 'Colaborador agregado correctamente' });
  }

  const eliminarColaborador = (id) => {
      setColaboradores(colaborador => colaborador.filter(colaborador => colaborador.id !== id));
      setAlerta({ tipo: 'info', mensaje: 'Colaborador eliminado correctamente'});
  }

  const [alerta, setAlerta] = useState(null);

  const handleAlerta = ({ tipo, mensaje }) => {
      setAlerta({ tipo, mensaje });
  }
  const [buscador, setBuscador] = useState('');
  function handleBuscador(e) {
    setBuscador(e.target.value)
  }

  function filtrarColaboradores(colaboradores) {
      const filtro = buscador.toLowerCase();
      return colaboradores.filter(colaborador => {
          return colaborador.nombre.toLowerCase().includes(filtro) || colaborador.correo.toLowerCase().includes(filtro) || colaborador.cargo.toLowerCase().includes(filtro) || colaborador.edad.toLowerCase().toString().includes(filtro) || colaborador.telefono.toString().includes(filtro) || colaborador.id.toString().includes(filtro);
      })
  }
  return (
      <div className="container">
          <div>
              <Buscador className="seacher" handleBuscador={handleBuscador} />
              <h1 className="tittle">Base de datos de Colaboradores</h1>
              <Listado colaboradores={filtrarColaboradores(colaboradores)} eliminarColaborador={eliminarColaborador} />
             
          </div>
          <div>
              <Formulario agregarColaborador={agregarColaborador} handleAlerta={handleAlerta} />
          </div>
          <div className="alert1">
          {alerta ? <Alert  tipo={alerta.tipo} mensaje={alerta.mensaje} /> : null}
          </div>
      </div>
  )
}

export default App