import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONTRUCTOR: Cuando se instancia el componente ')

    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');

    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo');

    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props');

    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse');

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse');

    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer');

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;