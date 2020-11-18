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

export default function Formcita(props) {
  const {
    onClickEliminar,
    accion,
    fechaCita,
    onChangefecha,
    horaDisponible,
    onChangehoraDisp,
    nombres,
    onChangenombres,
    nombreMedico,
    onChangenombMedico,
    precio,
    onChangeprecio,
    tipo,
    onChangetipo,
    idExpediente,
    onChangeIdexped,
    idMedico,
    onChangeIdmedico,
    onClickGuardar,
  } = props;  
    
  const classes = useStyles();
  const clas = useStyl();
    
  return (
    <div className={classes.root}>
        <h1>{accion}</h1>
      <div>
        <TextField
          id="fechaCita"
          label="Fecha Cita"
          style={{ margin: 8 }}
          placeholder="Fecha cita"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={fechaCita}
          onChange={onChangefecha}
        />
         <TextField
          id="horaDisponible"
          label="Hora Disponible:"
          style={{ margin: 8 }}
          placeholder="Hora Disponible"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={horaDisponible}
          onChange={onChangehoraDisp}
        />
        <TextField
          id="precio"
          label="Precio:"
          style={{ margin: 8 }}
          placeholder="precio"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={precio}
          onChange={onChangeprecio}
        />
        <TextField
          id="tipo"
          label="Tipo:"
          style={{ margin: 8 }}
          placeholder="Tipo"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={tipo}
          onChange={onChangetipo}
        />
        <TextField
          id="Idexpediente"
          label="Id Expediente:"
          style={{ margin: 8 }}
          placeholder="Id Expediente"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={idExpediente}
          onChange={onChangeIdexped}
        />
        <TextField
          id="nombres"
          label="Nombre Paciente:"
          style={{ margin: 8 }}
          placeholder="NombrePaciente"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={nombres}
          onChange={onChangenombres}
        />
        <TextField
          id="idMedico"
          label="Id Medico:"
          style={{ margin: 8 }}
          placeholder="Id Medico:"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={idMedico}
          onChange={onChangeIdmedico}
        />
        <TextField
          id="nombreMedico"
          label="Nombre Medico:"
          style={{ margin: 8 }}
          placeholder="Nombre Medico:"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={nombreMedico}
          onChange={onChangenombMedico}
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
                    to="/cita"
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