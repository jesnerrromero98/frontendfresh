import React from 'react';
import {Layout} from './../elements/theme/components/layout';
import{ListContainer}from'./../elements/cita/containers/list-containerscita';
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

export const Cita= () => {

    const classes = useStyles();
    
    return (
        <Layout >
             <section className={classes.pageHeader}>
                <h1 >Cita</h1>
                <Link
                    to="/cita/agregar"
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