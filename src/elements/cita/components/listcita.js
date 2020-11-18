import React from 'react';
import TableComponent from './../../theme/components/table';


export const ListCita = (props) => {
    const {data} = props;
    <button>Guardar</button>
    return (
        <TableComponent 
             id='idCita'
             editUrlBase='/cita/editar/'
             style={{ height: 400, width: '100%' }}
             rows={data}
            columns={[
                {
                    width: 100,
                    label: 'IdCita',
                    dataKey: 'idCita',
                },
                {
                width: 200,
                label: 'fecha Cita',
                dataKey: 'fechaCita',
                numeric: true,
            },
            {
                width: 200,
                label: 'Hora Cita',
                dataKey: 'horaDisponible',
                numeric: true,
                
            },
            {
                width: 200,
                label: 'Precio',
                dataKey: 'precio',
                numeric: true,
            },
            {
                width: 200,
                label: 'Tipo',
                dataKey: 'tipo',
                numeric: true,
            },
            {
                width: 200,
                label: 'Idexpediente',
                dataKey: 'idExpediente',
                numeric: true,
            },
            {
                width: 200,
                label: ' Nombre Paciente',
                dataKey: 'nombres',
                numeric: true,
            },
            {
                width: 150,
                label: 'IdMedico',
                dataKey: 'idMedico',
                numeric: true,
            },
            {
                width: 150,
                label: ' Nombre Medico',
                dataKey: 'nombreMedico',
                numeric: true,
            },
           
            
            ]}
        />
    );
};
export default ListCita;