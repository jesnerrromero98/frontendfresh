import React, {useState, useEffect,} from 'react';
import {ListCita} from './../components/listcita';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const ListContainer = () => {
    const [cita, setCita] = useState([]);

    const getCita = () => {
        fetch(`${URL_API}/Cita`)
        .then(res => res.json())
        .then(data => {
            setCita(data);
            console.log(data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getCita();
    }, []);
    return (
        <ListCita
            data={cita}
        />
    );
};