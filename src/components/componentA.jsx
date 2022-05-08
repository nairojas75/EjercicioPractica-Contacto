import React from 'react';
import { Contact } from '../models/contact';
import ComponenteB from './componentB';


const ComponenteA = () => {

    const ContactoUno = new Contact('Jose', 'Jimenez', 'jj@g.com', false)
    return (
        <div>
            <h1>
                El contacto:
            </h1>
            <ComponenteB contact={ContactoUno}></ComponenteB>
            
        </div>
    );
};

export default ComponenteA;
