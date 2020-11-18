import React, {useState,} from 'react';
import {useParams} from 'react-router-dom';
import Formcita from './../components/formcita';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const AddCita= (props) => {

    const {idCita} = useParams();

    const [fechaCita, setFechaCita] = useState('');
    const handleChangeFechacita = (e) => setFechaCita(e.target.value);

    const [horaDisponible, setHoraDisponible] = useState('');
    const handleChangeHoraDispo = (e) =>setHoraDisponible(e.target.value);
    
    const [precio, setPrecio] = useState('');
    const handleChangePrecio = (e) => setPrecio(e.target.value);
    
    const [tipo, setTipo] = useState('');
    const handleChangeTipo = (e) => setTipo(e.target.value);

    const [idExpediente, setExpediente] = useState('');
    const handleChangeIdExped = (e) =>setExpediente(e.target.value);
    
    const [idMedico, setidmedico] = useState('');
    const handleChangeidmedico = (e) =>setidmedico(e.target.value);
 
   
    const [nombres, setnombres] = useState('');
    const handleChangenombres = (e) =>setnombres(e.target.value);
   
    const [nombreMedico, setnombreMedico] = useState('');
    const handleChangenombreMedico = (e) =>setnombreMedico(e.target.value);
   

    const handleClickGuardar = () => {
       
        const body={
            idCita: !idCita ? 0: Number(idCita),
            fechaCita: fechaCita,
            horaDisponible: horaDisponible,
            precio:precio,
            tipo:tipo,   
            idExpediente: Number(idExpediente),
            nombres:nombres,
            idMedico: Number(idMedico),
            nombreMedico:nombreMedico,
            error: "",

        };
        console.log(body);
        fetch(`${URL_API}/cita`, {
            method: !idCita ?'POST':'PUT',
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
        fetch(`${URL_API}/Cita/${idCita}`, {
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

    console.log("idCita: ", idCita);
    return (
        <Formcita
        accion={!idCita ?'Nueva Cita': `Editar Cita ${idCita}`}
            
            fechaCita={fechaCita}
            onChangefecha={handleChangeFechacita}

            horaDisponible={horaDisponible}
            onChangehoraDisp={handleChangeHoraDispo}
            
            precio={precio}
            onChangeprecio={handleChangePrecio}
            
            tipo={tipo}
            onChangetipo={handleChangeTipo}

            idExpediente={idExpediente}
            onChangeIdexped={handleChangeIdExped}
            nombres={nombres}
            onChangenombres={handleChangenombres}
            nombreMedico={nombreMedico}
            onChangenombMedico={nombreMedico}
            idMedico={idMedico}
            onChangeIdmedico={handleChangeidmedico}
            onClickGuardar={handleClickGuardar}
            onClickEliminar={idCita ? handleClickEliminar : null}
        />
    );
};