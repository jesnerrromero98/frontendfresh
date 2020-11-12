import React from 'react';
import TableComponent from './../../theme/components/table';


export const ListConsulta = (props) => {
    const {data} = props;
    <button>Guardar</button>
    return (
        <TableComponent 
             id='idConsulta'
             editUrlBase='/consulta/editar/'
             style={{ height: 400, width: '100%' }}
             rows={data}
            columns={[
                {
                    width: 100,
                    label: 'IdConsulta',
                    dataKey: 'idConsulta',
                },
                {
                width: 200,
                label: 'Fecha',
                dataKey: 'fecha',
                numeric: true,
            },
            {
                width: 200,
                label: 'Hora',
                dataKey: 'hora',
                numeric: true,
                
            },
            {
                width: 200,
                label: 'Sintoma',
                dataKey: 'sintoma',
                numeric: true,
            },
            {
                width: 200,
                label: 'Diagnostico',
                dataKey: 'diagnostico',
                numeric: true,
            },
            {
                width: 200,
                label: ' Nombre Paciente',
                dataKey: 'nombres_Paciente',
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
export default ListConsulta;