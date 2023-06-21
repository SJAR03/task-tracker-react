/**
 * Ejemplo de uso del método componentWillMount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * { Cuando el componente va a desaparecer}
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }

  render() {
    return (
      <div>
        <h1>
            WillUnMount
        </h1>
      </div>
    )
  }
}

import React, { useEffect } from 'react'

export const WillUnMountHook = () => {

    useEffect(() => {
        //Aqui nada
      return () => {
        console.log('Comportamiento antes de que el componente desaparezca'); 
      }
    }, [])

  return (
    <div>
      
    </div>
  )
}

