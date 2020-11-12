import React, {useState, useEffect,} from 'react';
import {ListMedico} from './../componentsmedico/listmedico';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const ListContainer = () => {
    const [medicos, setMedicos] = useState([]);

    const getMedicos = () => {
        fetch(`${URL_API}/Medico`)
        .then(res => res.json())
        .then(data => {
            setMedicos(data);
            console.log(data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getMedicos();
    }, []);
    return (
        <ListMedico
            data={medicos}
        />
    );
};
