import React, {useState} from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from './elementos/Formularios'
import Input from './componentes/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [pedido,cambiarPedido] = useState({campo:'', valido:null});
    const [apellido,cambiarApellido] = useState({campo:'', valido:null});
    const [formularioValido, cambiarFormularioValido]=useState(null);


    const expresiones = {
    //    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        apellido: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
       pedido: /^\d{1,10}$/ // 7 a 14 numeros.
        //   password: /^.{4,12}$/, // 4 a 12 digitos.
     //   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
     //   telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (
            pedido.valido === 'true' && 
            apellido.valido === 'true'
            ) {
            cambiarFormularioValido(true)
            cambiarPedido({campo:'', valido:null})
            cambiarApellido({campo:'', valido:null})

            //
            // codigo API
            //
        }else{
            cambiarFormularioValido(false)
        }

    }

    return ( 
        <main>
            <Formulario action='' onSubmit={onSubmit}>
           <Input 
                estado={pedido}
                cambiarEstado={cambiarPedido}
                label="Numero de pedido"
                placeholder="999999"
                type="number"
                nombre="pedido"
                leyendaError="Escriba el nro de pedido a consultar"
                expresionRegular={expresiones.pedido}
           />
           <Input 
                estado={apellido}
                cambiarEstado={cambiarApellido}
                label="Apellido"
                placeholder="Ingrese su apellido o parte"
                type="text"
                nombre="apellido"
                leyendaError="Escriba el apellido del paciente del pedido"
                expresionRegular={expresiones.apellido}
                
           />   { formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                        <b>Error:</b> Por favor rellene el formulario correctamente.
                    </p>
                </MensajeError>}
                
                <ContenedorBotonCentrado>
                    <Boton type='submit'>Enviar</Boton>
                    {formularioValido === true && <MensajeExito>Su nro de pedido fue enviado exitosamente</MensajeExito>
}                </ContenedorBotonCentrado>
                
            </Formulario>
        </main>
        ); 
}

export default App;