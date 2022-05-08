import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact';


const ComponenteB = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name}
            </h2>
            <h2>
                Apellido : {contact.lastname}
            </h2>
            <h2>
                Email: { contact.email}
            </h2>
            <h2>
                Contacto {contact.connected ? 'En Línea': 'No Dispobible'}
            </h2>

        </div>
    );
};


ComponenteB.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ComponenteB;
