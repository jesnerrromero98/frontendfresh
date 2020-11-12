import React from 'react';
import {Layout} from './../elements/theme/components/layout';
import {ListContainer} from './../elements/medico/containers/list-containermedico';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    pageHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    },
});

export const Medico = () => {

    const classes = useStyles();
    
    return (
        <Layout >
            <section className={classes.pageHeader}>
                <h1 >Medico</h1>
                <Link
                    to="/medico/agregar"
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