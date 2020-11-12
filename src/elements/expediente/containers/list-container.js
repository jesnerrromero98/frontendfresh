import React, {useState, useEffect,} from 'react';
import {List} from './../components/list';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const ListContainer = () => {
    const [expedientes, setExpedientes] = useState([]);

    const getExpedientes = () => {
        fetch(`${URL_API}/Expediente`)
        .then(res => res.json())
        .then(data => {
            setExpedientes(data);
            console.log(data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getExpedientes();
    }, []);
    return (
        <List
            data={expedientes}
        />
    );
};