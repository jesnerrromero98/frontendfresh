import React, {useState, useEffect,} from 'react';
import {ListReceta} from './../componentsreceta/listReceta';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const ListContainer = () => {
    const [receta, setReceta] = useState([]);

    const getReceta = () => {
        fetch(`${URL_API}/Receta`)
        .then(res => res.json())
        .then(data => {
            setReceta(data);
            console.log(data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getReceta();
    }, []);
    return (
        <ListReceta 
            data={receta}
        />
    );
};
