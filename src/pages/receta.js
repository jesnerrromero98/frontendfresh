import React from 'react';
import {Layout} from './../elements/theme/components/layout';
import {ListContainer} from './../elements/receta/containersreceta/list-containerreceta';
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

export const Receta = () => {
 
    const classes = useStyles();
    
    return (
        <Layout >
            <section className={classes.pageHeader}>
                <h1 >Receta</h1>
                <Link
                    to="/receta/agregar"
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