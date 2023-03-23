import React from 'react'
import { Input, Label, GrupoInput, LeyendaError, IconoValidacion } from '../elementos/Formularios'
import { faCircleCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ComponenteInput = ({estado, cambiarEstado, label, nombre, placeholder, type, leyendaError, expresionRegular}) =>
{
    const onChange = (e) =>{
        cambiarEstado({...estado, campo: e.target.value});
    }

    const validacion = () =>{
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({...estado, valido: 'true'})                
            } else {
                cambiarEstado({...estado, valido: 'false'})
            }
        }
    }

    return (
        <div>
                <Label htmlFor={nombre} valido={estado.valido}>{label}</Label>
                <GrupoInput>
                    <Input 
                        type={type} 
                        placeholder={placeholder} 
                        id={nombre}
                        value={estado.campo}
                        onChange={onChange}
                        onKeyUp={validacion}
                        onBlur={validacion}
                        valido={estado.valido}
                    />
                    <IconoValidacion 
                        icon={estado.valido === 'true' ? faCircleCheck : faTimesCircle} 
                        valido={estado.valido} 
                    />
                </GrupoInput>
                <LeyendaError>{leyendaError} valido={estado.valido}</LeyendaError>

        </div>              
    );
}
export default ComponenteInput;