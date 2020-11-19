import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";;

const useStyl = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const useSty = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
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
    idExpediente,
    onChangeIdexped,
    idMedico,
    onChangeIdmedico,
    onClickGuardar,
    expedientes,
    medicos
  } = props;  
    
  const classes = useStyles();
  const clas = useStyl();
  
  const cla = useSty();
  const [ setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    
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

     <div>
        <FormControl className={cla.formControl}>
          <InputLabel id="expediente-label">Expediente</InputLabel>
          <Select
            id="expediente-label"
            value={idExpediente}
            onChange={onChangeIdexped}
          >
            <MenuItem>--Seleccionar Expediente--</MenuItem>
            {expedientes && expedientes.map(item => (
              <MenuItem value={item.idExpediente}>{item.nombres}</MenuItem>
            ))}
          </Select>
        </FormControl>
    </div>
    <div>
        <FormControl className={cla.formControl}>
          <InputLabel id="Medico-label">Medico</InputLabel>
          <Select
            id="Medico-label"
            value={idMedico}
            onChange={onChangeIdmedico}
          >
            <MenuItem>--Seleccionar Medico--</MenuItem>
            {medicos && medicos.map(item => (
              <MenuItem value={item.idMedico}>{item.nombreMedico}</MenuItem>
            ))}
          </Select>
        </FormControl>
    </div> 
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