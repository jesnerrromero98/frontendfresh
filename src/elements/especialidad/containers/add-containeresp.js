import React, {useState,} from 'react';
import {useParams} from 'react-router-dom';
import Formespec from './../components/formespecialidad';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const AddEspec = (props) => {

    const {idEspecialidad} = useParams();
    
    const [nombreEspecialidad, setNombrespec] = useState('');
    const handleChangeNombrespec = (e) => setNombrespec(e.target.value);

    const [descpEspecialidad, setDescespec] = useState('');
    const handleChangeDescpEspec = (e) => setDescespec(e.target.value);

    const handleClickGuardar = () => {
        const body = {
            idEspecialidad: !idEspecialidad ? 0 : Number(idEspecialidad),
            nombreEspecialidad: nombreEspecialidad,
            descpEspecialidad: descpEspecialidad,
            error: "",
        };
        console.log(body);
        fetch(`${URL_API}/Especialidad`, {
            method: !idEspecialidad ? 'POST' : 'PUT',
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
        fetch(`${URL_API}/Especialidad/${idEspecialidad}`, {
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

    console.log("idEspecialidad: ", idEspecialidad);
    
    return (
        <Formespec
            accion={!idEspecialidad ? 'Nuevo especialidad' : `Editar especialidad ${idEspecialidad}`}
            nombreEspecialidad={nombreEspecialidad}
            onChangeNombrespec={handleChangeNombrespec}
            descpEspecialidad={descpEspecialidad}
            onChangedescespec={handleChangeDescpEspec}
            onClickGuardar={handleClickGuardar}
            onClickEliminar={idEspecialidad ? handleClickEliminar : null}
        />
    );
};