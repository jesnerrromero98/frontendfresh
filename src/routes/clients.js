import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {Home} from './../pages/home';
import { Consulta } from './../pages/consulta';
import {Medico} from'./../pages/medico';
import { Receta } from '../pages/receta';
import {AddExpediente} from '../elements/expediente/containers/add-containerexpe';
import {AddMedicoContainer} from '../elements/medico/containers/add-container';
import {AddReceta} from '../elements/receta/containersreceta/add-containereceta';
import {AddConsulta} from '../elements/consulta/container/add-containersconsulta';
import { Cita } from '../pages/Cita';
import {AddCita} from '../elements/cita/containers/add-containerscita';
import { Especialidad} from '../pages/especialidad';
import {AddEspec} from '../elements/especialidad/containers/add-containeresp';

export const ClientsRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/expediente/agregar' exact component={AddExpediente} />
                <Route path='/expediente/editar/:idExpediente' exact component={AddExpediente} />
                <Route path='/medico' exact component={Medico} />
                <Route path='/medico/agregar' exact component={AddMedicoContainer} />
                <Route path='/medico/editar/:idMedico' exact component={AddMedicoContainer} />
                <Route path='/receta' exact component={Receta} />
                <Route path='/receta/agregar' exact component={AddReceta} />   
                <Route path='/receta/editar/:idReceta' exact component={AddReceta} />  
                <Route path='/consulta' exact component={Consulta} />
                <Route path='/consulta/agregar' exact component={AddConsulta} />
                <Route path='/consulta/editar/:idConsulta' exact component={AddConsulta} />
                <Route path='/cita' exact component={Cita} />
                <Route path='/cita/agregar' exact component={AddCita} />
                <Route path='/cita/editar/:idCita' exact component={AddCita} />
                <Route path='/especialidad' exact component={Especialidad} />
                <Route path='/especialidad/agregar' exact component={AddEspec} />
                <Route path='/especialidad/editar/:idEspecialidad' exact component={AddEspec} />
            </Switch>
        </Router>
    );
};