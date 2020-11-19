import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

export default function Formedico(props) {

  const cla = useSty();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const {
    onClickEliminar,
    accion,
    nombre,
    onChangeNombre,
    telefono,
    onChangeTelefono,
    idEspecialidad,
    onchangeIdespec,
    onClickGuardar,
    especialidades,
  } = props;
    
  const classes = useStyles();
  const clas = useStyl();
    
  return (
    <div className={classes.root}>
        <h1>{accion}</h1>
      <div>
        <TextField
          id="nombreMedico"
          label="NombreMedico:"
          style={{ margin: 8 }}
          placeholder="Nombre"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={nombre}
          onChange={onChangeNombre}
        />
        <TextField
          id="telefono_Celular"
          label="Telefono_Celular:"
          style={{ margin: 8 }}
          placeholder="telefono_celular"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={telefono}
          onChange={onChangeTelefono}
        />   
        <div>
          <FormControl className={cla.formControl}>
            <InputLabel id="medico-label">Age</InputLabel>
            <Select
              id="demmedico-label"
              value={idEspecialidad}
              onChange={onchangeIdespec}
            >
              <MenuItem>--Seleccionar Especialidad--</MenuItem>
              {especialidades && especialidades.map(item => (
                <MenuItem value={item.idEspecialidad}>{item.nombreEspecialidad}</MenuItem>
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
          to="/medico"
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
