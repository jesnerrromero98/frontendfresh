import React, {useState, useEffect,} from 'react';
import {ListConsulta} from './../componentes/listconsulta';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const ListContainer = () => {
    const [consulta, setConsulta] = useState([]);

    const getConsulta = () => {
        fetch(`${URL_API}/Consulta`)
        .then(res => res.json())
        .then(data => {
            setConsulta(data);
            console.log("Consultas: ", data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getConsulta();
    }, []);
    return (
        <ListConsulta 
            data={consulta}
        />
    );
};