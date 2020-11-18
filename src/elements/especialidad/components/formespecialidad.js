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

export default function Formespec(props) {

  const {
    onClickEliminar,
    accion,
    nombreEspecialidad,
    onChangeNombrespec,
    descpEspecialidad,
    onChangedescespec,
    onClickGuardar,
  } = props;
    
  const classes = useStyles();
  const clas = useStyl();
    
  return (
    <div className={classes.root}>
        <h1>{accion}</h1>
      <div>
        <TextField
          id="nombreEspecialidad"
          label="Nombre Especialidad:"
          style={{ margin: 8 }}
          placeholder="Nombre Especialidad"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={nombreEspecialidad}
          onChange={onChangeNombrespec}
        />
         <TextField
          id="descpEspecialidad"
          label="Descripcion Especialidad:"
          style={{ margin: 8 }}
          placeholder="Descripcion Especialidad"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={descpEspecialidad}
          onChange={onChangedescespec}
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
          to="/especialidad"
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
