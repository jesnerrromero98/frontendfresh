import React from 'react';
import TableComponent from './../../theme/components/table';

export const ListMedico = (props) => {
    const {data} = props;
    return (
        <TableComponent 
            id='idMedico'
            editUrlBase='/medico/editar/'
            style={{ height: 400, width: '100%' }}
            rows={data}
            columns={[
                {
                    width: 100,
                    label: 'IdMedico',
                    dataKey: 'idMedico',
                },
                {
                width: 150,
                label: 'Nombre Medico',
                dataKey: 'nombreMedico',
            },
            {
                width: 150,
                label: 'Telefono_Celular',
                dataKey: 'telefono_Celular',
                numeric: true,
            },

            {
                width: 100,
                label: 'Id Especialidad',
                dataKey: 'idEspecialidad',
            },
            {
                width: 150,
                label: 'Nombre Especialidad',
                dataKey: 'nombreEspecialidad',
            },
            
            ]}
        />
    
    );  
};
