import React, {useState,} from 'react';
import {useParams} from 'react-router-dom';
import Formreceta from './../componentsreceta/formreceta';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const AddReceta = (props) => {

    const {idReceta} = useParams();
    
    const [nombre, setNombre] = useState('');
    const handleChangeNombre = (e) => setNombre(e.target.value);

    const [presentacion, setPresentacion] = useState('');
    const handleChangePresentacion = (e) => setPresentacion(e.target.value);
    
    const [cantidad, setCantidad] = useState('');
    const handleChangeCantidad = (e) => setCantidad(e.target.value);
    
    const [descripcion, setDescripcion] = useState('');
    const handleChangeDescripcion = (e) => setDescripcion(e.target.value);
    
    const handleClickGuardar = () => {

        const body = {
            idReceta: !idReceta ? 0: Number(idReceta),
            nombre: nombre,
            presentacion: presentacion,
            cantidad:cantidad,
            descripcion:descripcion,    
            error: "",
        };

        console.log(body);
        fetch(`${URL_API}/Receta`, {
            method: !idReceta ?'POST':'PUT',
            headers: { 'Content-Type':  'application/json; charset=UTF-8', 'Accept': '*/*'}, 
            body: JSON.stringify(body),
        })
        .then(res => {
            if(res.ok) {
                console.log("Guardado existoso");
            }
            else {
                console.log("Error: ", res);
            }
        })
        .catch(error => {
            console.log("Error: ", error);
        });
    };
    const handleClickEliminar = () => {
        fetch(`${URL_API}/Receta/${idReceta}`, {
            method: 'DELETE',
            headers: { 'Accept': '*/*' },
        })
        .then(res => {
            if(res.ok) {
                console.log("Eliminación existosa");
            }
            else {
                console.log("Error: ", res);
            }
        })
        .catch(error => {
            console.log("Error: ", error);
        });
    };

    console.log("idReceta: ", idReceta);
    
    return (
        <Formreceta

            accion={!idReceta ?'Nueva Receta': `Editar Receta ${idReceta}`}
            nombre={nombre}
            onChangeNombre={handleChangeNombre}
            presentacion={presentacion}
            onChangePresentacion={handleChangePresentacion}
            descripcion={descripcion}
            onChangeDescripcion={handleChangeDescripcion}
            cantidad={cantidad}
            onChangeCantidad={handleChangeCantidad}
            onClickGuardar={handleClickGuardar}
            onClickEliminar={idReceta ? handleClickEliminar : null}
        />
    );
};