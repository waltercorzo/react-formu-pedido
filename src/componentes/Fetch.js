import React, {useEffect, useState} from 'react';

const Fetch = () => {
    const [pedido, setPedido] = useState("");

    useEffect(() => {
        const url ="http://localhost:8000/pedidos/4"

        const fetchData = async ()=> {
            try{
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.estado);

                setPedido(json.estado);

            }catch (error){
                console.log("error",error)
            }
        };

        fetchData();

    },[]);

    return (<div><p>El pedido esta {pedido}</p></div>);

};

export default Fetch;