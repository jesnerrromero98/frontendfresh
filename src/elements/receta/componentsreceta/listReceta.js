import React from 'react';
import TableComponent from './../../theme/components/table';


export const ListReceta = (props) => {
    const {data} = props;
    return (
        <TableComponent 
            id='idReceta'
            editUrlBase='/Receta/editar/'
            style={{ height: 400, width: '100%' }}
            rows={data}
            columns={[
            {
                width: 200,
                label: 'IdReceta',
                dataKey: 'idReceta',
            },    
            {
                width: 200,
                label: 'Nombre',
                dataKey: 'nombre',
            },
            {
                width: 200,
                label: 'Presentacion',
                dataKey: 'presentacion',
                numeric: true,
            },
            {
                width: 200,
                label: 'Descripcion',
                dataKey: 'descripcion',
                numeric: true,
            },
            {
                width: 200,
                label: 'Cantidad',
                dataKey: 'cantidad',
              
            },
            ]}
        />
    );
};
export default ListReceta;