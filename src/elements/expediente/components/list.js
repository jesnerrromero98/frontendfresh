import React from 'react';
import TableComponent from './../../theme/components/table';

export const List = (props) => {
    const {data} = props;
    <button>Guardar</button>
    return (
        
        <TableComponent
            id='idExpediente'
            editUrlBase='/expediente/editar/'
            style={{ height: 400, width: '100%' }}
            rows={data}
            columns={[
                {
                    width: 100,
                    label: 'IdExpediente',
                    dataKey: 'idExpediente',
                },
                {
                    width: 200,
                    label: 'Nombres',
                    dataKey: 'nombres',
                },
                {
                    width: 200,
                    label: 'Apellidos',
                    dataKey: 'apellidos',
                    numeric: true,
                },
                {
                    width: 200,
                    label: 'Cedula',
                    dataKey: 'cedula',
                    numeric: true,
                },
                {
                    width: 200,
                    label: 'Departamento',
                    dataKey: 'departamento',
                    numeric: true,
                },
                {
                    width: 200,
                    label: ' Municipio',
                    dataKey: 'municipio',
                    numeric: true,
                },
                {
                    width: 150,
                    label: 'Celular',
                    dataKey: 'telefono_Celular',
                    numeric: true,
                },
                {
                    width: 200,
                    label: ' FechaNacimiento',
                    dataKey: 'fecha_Nacimiento',
                    numeric: true,
                },
            ]}

        />
             
    );
   
};