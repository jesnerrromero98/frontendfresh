import React from 'react';
import TableComponent from '../../theme/components/table';

export const ListEspec = (props) => {
    const {data} = props;
    return (
        <TableComponent 
            id='idEspecialidad'
            editUrlBase='/especialidad/editar/'
            style={{ height: 400, width: '100%' }}
            rows={data}
            columns={[
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
            {
                width: 150,
                label: 'Descrip. Especialidad',
                dataKey: 'descpEspecialidad',
                numeric: true,
            },
            
            ]}
        />
    
    );  
};
