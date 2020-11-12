import React from 'react';
import {Layout} from './../elements/theme/components/layout';
import{ListContainer}from'./../elements/consulta/container/list-containersconsulta';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    pageHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    },
});

export const Consulta = () => {

    const classes = useStyles();
    
    return (
        <Layout >
             <section className={classes.pageHeader}>
                <h1 >Consulta</h1>
                <Link
                    to="/consulta/agregar"
                    component={Button}
                    variant="contained"
                    color="primary"
                >
                    Agregar
                </Link>
            </section>
            <ListContainer />
        </Layout>
    );
};