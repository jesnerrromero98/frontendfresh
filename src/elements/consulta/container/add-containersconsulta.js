import React, {useState,useEffect} from 'react';
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
    
    const [idExpediente, setidExpediente] = useState('');
    const handleChangeIdExped = (e) =>setidExpediente(e.target.value);

    const [idMedico, setidmedico] = useState('');
    const handleChangeidmedico = (e) =>setidmedico(e.target.value);

    const [expedientes, setExpedientes] = useState([]);

    const [medicos, setMedicos] = useState([]);

    const getMedicos = () => {
        fetch(`${URL_API}/Medico`)
        .then(res => res.json())
        .then(data => {
            setMedicos(data);
            console.log(data);
        })
        .catch(error => console.log("Error: ", error));
    };

    useEffect(() => {
        getMedicos();
    }, []);
    
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

    const handleClickGuardar = () => {
       
        const body={
            idConsulta: !idConsulta ? 0: Number(idConsulta),
            fecha: fecha,
            hora: hora,
            sintoma:sintoma,
            diagnostico:diagnostico,   
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
        accion={!idConsulta ?'Nueva Consulta': `Editar Consulta ${idConsulta}`}
            
            fecha={fecha}
            onChangeFecha={handleChangeFecha}

            hora={hora}
            onChangeHora={handleChangeHora}
            
            sintoma={sintoma}
            onChangeSintoma={handleChangeSintoma}
            
            diagnostico={diagnostico}
            onChangeDiagnostico={handleChangeDiagnostico}
       
            idExpediente={idExpediente}
            onChangeIdexped={handleChangeIdExped}

            idMedico={idMedico}
            onChangeIdmedico={handleChangeidmedico}
                     
            onClickGuardar={handleClickGuardar}
            onClickEliminar={idConsulta ? handleClickEliminar : null}

            expedientes={expedientes}
            medicos={medicos}
        />
    );
};