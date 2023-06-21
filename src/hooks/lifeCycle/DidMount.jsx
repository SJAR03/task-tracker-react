/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes que el componente sea añadido al DOM (rederice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMount = () => {

    useEffect(() => {
        console.log('Comportamiento antes que el componente sea añadido al DOM (rederice)')

    }, [])
    

  return (
            <div>
                <h1>DidMount</h1>
            </div>
  )
}
