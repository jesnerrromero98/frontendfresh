import React, {useState, useEffect,} from 'react';
import {useParams} from 'react-router-dom';
import Formedico from './../componentsmedico/formmedico';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const AddMedicoContainer = (props) => {

    const {idMedico} = useParams();
    
    const [nombre, setNombre] = useState('');
    const handleChangeNombre = (e) => setNombre(e.target.value);

    const [telefono, setTelefono] = useState('');
    const handleChangeTelefono = (e) => setTelefono(e.target.value);

    const handleClickGuardar = () => {
        const body = {
            idMedico: !idMedico ? 0 : Number(idMedico),
            nombre_Medico: nombre,
            telefono_Celular: telefono,
            error: "",
        };
        console.log(body);
        fetch(`${URL_API}/Medico`, {
            method: !idMedico ? 'POST' : 'PUT',
            headers: { 'Content-Type': 'application/json; charset=UTF-8', 'Accept': '*/*' },
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
        fetch(`${URL_API}/Medico/${idMedico}`, {
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

    console.log("idMedico: ", idMedico);
    
    return (
        <Formedico
            accion={!idMedico ? 'Nuevo médico' : `Editar médico ${idMedico}`}
            nombre={nombre}
            onChangeNombre={handleChangeNombre}
            telefono={telefono}
            onChangeTelefono={handleChangeTelefono}
            onClickGuardar={handleClickGuardar}
            onClickEliminar={idMedico ? handleClickEliminar : null}
        />
    );
};