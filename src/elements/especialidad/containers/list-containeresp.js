import React, {useState, useEffect,} from 'react';
import {ListEspec} from './../components/listEspecialidad';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const ListContainer = () => {
    const [especialidad, setEspecialidad] = useState([]);

    const getEspecialidad = () => {
        fetch(`${URL_API}/Especialidad`)
        .then(res => res.json())
        .then(data => {
            setEspecialidad(data);
            console.log(data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getEspecialidad();
    }, []);
    return (
        <ListEspec
            data={especialidad}
        />
    );
};
