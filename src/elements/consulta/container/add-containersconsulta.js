import React, {useState,} from 'react';
import {useParams} from 'react-router-dom';
import Formconsulta from './../componentes/formconsulta';

const URL_API = process.env.REACT_APP_URL_API || "https://localhost:44353/api";

export const AddConsulta= (props) => {

    const {idConsulta} = useParams();

    const [fecha, setFecha] = useState('');
    const handleChangeFecha = (e) => setFecha(e.target.value);

    const [hora, setHora] = useState('');
    const handleChangeHora = (e) => setHora(e.target.value);
    
    const [sintoma, setSintoma] = useState('');
    const handleChangeSintoma = (e) => setSintoma(e.target.value);
    
    const [diagnostico, setDiagnostico] = useState('');
    const handleChangeDiagnostico = (e) => setDiagnostico(e.target.value);

    const [nombres, setPaciente] = useState('');
    const handleChangePaciente = (e) =>setPaciente(e.target.value);
    
    const [nombreMedico, setMedico] = useState('');
    const handleChangeMedico = (e) =>setMedico(e.target.value);
    
    const [idExpediente, setExpediente] = useState('');
    const handleChangeIdExped = (e) =>setExpediente(e.target.value);

    
    const [idMedico, setidmedico] = useState('');
    const handleChangeidmedico = (e) =>setidmedico(e.target.value);


    const handleClickGuardar = () => {
       
        const body={
            idConsulta: !idConsulta ? 0: Number(idConsulta),
            fecha: fecha,
            hora: hora,
            sintoma:sintoma,
            diagnostico:diagnostico,   
            nombres:nombres,
            nombreMedico:nombreMedico,
            idExpediente: Number(idExpediente),
            idMedico: Number(idMedico),
            error: "",
        };
        console.log(body);
        fetch(`${URL_API}/Consulta`, {
            method: !idConsulta ?'POST':'PUT',
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
        fetch(`${URL_API}/Consulta/${idConsulta}`, {
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

    console.log("idConsulta: ", idConsulta);
    return (
        <Formconsulta
        accion={!idConsulta ?'Nueva Consulta': `Editar COnsulta ${idConsulta}`}
            
            fecha={fecha}
            onChangeFecha={handleChangeFecha}

            hora={hora}
            onChangeHora={handleChangeHora}
            
            sintoma={sintoma}
            onChangeSintoma={handleChangeSintoma}
            
            diagnostico={diagnostico}
            onChangeDiagnostico={handleChangeDiagnostico}

            nombres={nombres}
            onChangePaciente={handleChangePaciente}

            nombreMedico={nombreMedico}
            onChangeMedico={handleChangeMedico}

            idExpediente={idExpediente}
            onChangeIdexped={handleChangeIdExped}

            idMedico={idMedico}
            onChangeIdmedico={handleChangeidmedico}
                     
            onClickGuardar={handleClickGuardar}
            onClickEliminar={idConsulta ? handleClickEliminar : null}
        />
    );
};