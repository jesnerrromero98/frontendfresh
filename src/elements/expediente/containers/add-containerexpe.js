import React, {useState,} from 'react';
import {useParams} from 'react-router-dom';
import Form from './../components/form';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const AddExpediente = (props) => {

    const {idExpediente} = useParams();
    
    const [nombres, setNombres] = useState('');
    const handleChangeNombres = (e) => setNombres(e.target.value);

    const [apellidos, setApellidos] = useState('');
    const handleChangeApellidos = (e) => setApellidos(e.target.value);
    
    const [cedula, setCedula] = useState('');
    const handleChangeCedula = (e) => setCedula(e.target.value);
    
    const [departamento, setDepartamento] = useState('');
    const handleChangeDepartamento = (e) => setDepartamento(e.target.value);

    const [municipio, setMunicipio] = useState('');
    const handleChangeMunicipio = (e) =>setMunicipio(e.target.value);
    
    const [telefono_Celular, setCelular] = useState('');
    const handleChangeCelular = (e) =>setCelular(e.target.value);

    const [fecha_Nacimiento, setFechaNacimiento] = useState('');
    const handleChangeFechaNacimiento= (e) =>setFechaNacimiento(e.target.value);
  

    const handleClickGuardar = () => {

        const body={
            idExpediente: !idExpediente ? 0: Number(idExpediente),
            nombres: nombres,
            apellidos: apellidos,
            cedula:cedula,
            departamento:departamento,   
            municipio:municipio,
            telefono_Celular:telefono_Celular,
            fecha_Nacimiento:fecha_Nacimiento,
            error: "",
        }
        console.log(body),
        fetch(`${URL_API}/Expediente`, {
            method: !idExpediente ?'POST':'PUT',
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
        fetch(`${URL_API}/Expediente/${idExpediente}`, {
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
    console.log("idExpediente: ", idExpediente);
    return (
        <Form

            accion={!idExpediente ?'Nueva Expediente': `Editar Expediente ${idExpediente}`}

            nombres={nombres}
            onChangeNombre={handleChangeNombres}

            apellidos={apellidos}
            onchangeApellidos={handleChangeApellidos}
            
            cedula={cedula}
            onChangeCedula={handleChangeCedula}
            
            departamento={departamento}
            onChangeDepartamento={handleChangeDepartamento}

            municipio={municipio}
            onChangeMunicipio={handleChangeMunicipio}

            telefono_Celular={telefono_Celular}
            onChangetelefono_Celular={handleChangeCelular}
            
            fecha_Nacimiento={fecha_Nacimiento}
            onChangefecha_Nacimiento={handleChangeFechaNacimiento}
            
            onClickGuardar={handleClickGuardar}
            
            onClickEliminar={idExpediente ? handleClickEliminar : null}
        />
    );
};