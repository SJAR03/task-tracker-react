/**
 * Ejemplo Hooks
 * -useState()
 * -useContext()
 */

import React, {useState, useContext} from 'react'

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

    // Inicializamos un estado vacio que va a rellenarse con los
    // datos del contexto del padre
    const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto)

  return (
    <div>
    <h1>
        El token es: {state.token}
    </h1>
    {/* Pintamos el componente 2 */}
      <Componente2></Componente2>
    </div>
  )
}

/**
 * Componente2
 * Muestra el valor de la sesión del contexto recibido desde el padre
 */
const Componente2 = () => {

    const state = useContext(miContexto)

  return (
    <div>
    <h2>
        La sesión es: {state.sesion}
    </h2>
      
    </div>
  )
}

/**
 * MiComponenteConContexto
 * Componente principal que utiliza el contexto miContexto
 * Renderiza Componente1 y un botón para actualizar la sesión
 */
export default function MiComponenteConContexto() {

    // Estado inicial que contiene los datos de sesión
    const estadoInicial = {
        token: '1234567',
        sesion: 1,

    }

    // Creamos el estado de este componente
    const [sesionData, setSesionData] = useState(estadoInicial)

    // Función para actualizar los datos de sesión
    function actualizarSesion() {
        setSesionData({
            token: 'uhfwhfhew',
            sesion: sesionData.sesion + 1,
        })
    }

  return (
    <miContexto.Provider value={sesionData}>
    {/* Todo lo que este aquí dentro puede leer los datos de sesionData */}
    {/* Además, si se actualiza, los componentes de aquí, también se actualizan */}
    <h1>Ejemplo de useState y useContext</h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}>Actualizar sesión</button>
    </miContexto.Provider>
  )
}
