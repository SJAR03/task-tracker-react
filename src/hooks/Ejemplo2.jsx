/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react'

const Ejemplo2 = () => {

    // Vamos a crear 2 contadores distintos
    // cada uno en un estado distinto
    const [contador1, setContador1] = useState(0)

    const [Contador2, setContador2] = useState(0)

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(Contador2 + 1);
    }

    /**
     * Trabajando con useEffect()
     */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente,
     * se ejecuta aquello que este dentro del useEffect
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    })
    

  return (
    <div>
      <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
      <h2>Contador 1: {contador1}</h2>
      <h2>Contador 2: {Contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      {/* Botones para cambiar los contadores */}
      <button onClick={incrementar1}>Incrementar contador 1</button>
      <button onClick={incrementar2}>Incrementar contador 2</button>
    </div>
  )
}

export default Ejemplo2
