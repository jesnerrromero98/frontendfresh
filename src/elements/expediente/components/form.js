import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyl = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:'500px',
    marginRight:'500px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Form(props) {

  const {
    onClickEliminar,
    accion,
    nombres,
    onChangeNombre,
    apellidos,
    onchangeApellidos,
    cedula,
    onChangeCedula,
    departamento,
    onChangeDepartamento,
    municipio,
    onChangeMunicipio,
    telefono_Celular,
    onChangetelefono_Celular,
    fecha_Nacimiento,
    onChangefecha_Nacimiento,
    onClickGuardar,
  } = props;  

  const classes = useStyles();
  const clas = useStyl();
    
  return (
    <div className={classes.root}>
        <h1>{accion}</h1>
      <div>
        <TextField
          id="nombres"
          label="Nombre:"
          style={{ margin: 8 }}
          placeholder="Nombre"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={nombres}
          onChange={onChangeNombre}
        />
         <TextField
          id="apellidos"
          label="Apellidos:"
          style={{ margin: 8 }}
          placeholder="Apellidos"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={apellidos}
          onChange={onchangeApellidos}
        />
        <TextField
          id="cedula"
          label="Cedula:"
          style={{ margin: 8 }}
          placeholder="cedula"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={cedula}
          onChange={onChangeCedula}
        />
        <TextField
          id="departamento"
          label="Departamento:"
          style={{ margin: 8 }}
          placeholder="Departamento"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={departamento}
          onChange={onChangeDepartamento}
        />
        <TextField
          id="municipio"
          label="Municipio:"
          style={{ margin: 8 }}
          placeholder="Municipio"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={municipio}
          onChange={onChangeMunicipio}
        />
        <TextField
          id="telefono_Celular"
          label="telefono_Celular:"
          style={{ margin: 8 }}
          placeholder="telefono_Celular"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={telefono_Celular}
          onChange={onChangetelefono_Celular}
        />
        <TextField
          id="fecha_Nacimiento"
          label="FechaNacimiento:"
          style={{ margin: 8 }}
          placeholder="fecha_Nacimiento"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={fecha_Nacimiento}
          onChange={onChangefecha_Nacimiento}
     />   
    </div>
    <div className={clas.root}>
    <Button
        variant="contained"
        color="primary"
        onClick={onClickGuardar}
      >
        Agregar
      </Button>
                <Link
                    to="/"
                    component={Button}
                    variant="contained"
                    color="secondary"
                >
                    Cancelar
                </Link>
                {onClickEliminar !== null && (
        <Button
          variant="contained"
          color="primary"
          onClick={onClickEliminar}
        >
          Eliminar
        </Button>
      )}
    </div>
    </div>
    
    
  );

}