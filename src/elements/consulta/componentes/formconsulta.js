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

export default function Formconsulta(props) {
  const {
    onClickEliminar,
    accion,
    fecha,
    onChangeFecha,
    hora,
    onChangeHora,
    sintoma,
    onChangeSintoma,
    diagnostico,
    onChangeDiagnostico,
    nombres_Paciente,
    onChangePaciente,
    nombreMedico,
    onChangeMedico,
    onClickGuardar,
  } = props;  
    
  const classes = useStyles();
  const clas = useStyl();
    
  return (
    <div className={classes.root}>
        <h1>{accion}</h1>
      <div>
        <TextField
          id="fecha"
          label="Fecha:"
          style={{ margin: 8 }}
          placeholder="Fecha"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={fecha}
          onChange={onChangeFecha}
        />
         <TextField
          id="hora"
          label="Hora:"
          style={{ margin: 8 }}
          placeholder="Hora"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={hora}
          onChange={onChangeHora}
        />
        <TextField
          id="sintoma"
          label="Sintoma:"
          style={{ margin: 8 }}
          placeholder="Sintoma"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={sintoma}
          onChange={onChangeSintoma}
        />
        <TextField
          id="diagnostico"
          label="Diagnostico:"
          style={{ margin: 8 }}
          placeholder="Diagnostico"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={diagnostico}
          onChange={onChangeDiagnostico}
        />
        <TextField
          id="nombres_Paciente"
          label="Nombre Paciente:"
          style={{ margin: 8 }}
          placeholder="NombrePaciente"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={nombres_Paciente}
          onChange={onChangePaciente}
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
          onChange={onChangeMedico}
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
                    to="/consulta"
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