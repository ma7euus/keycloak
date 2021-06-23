import * as React from 'react';
import {AppBar, makeStyles, Toolbar, Typography, Theme} from "@material-ui/core";
import logo from '../../../../static/img/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        backgroundColor: '#000000',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
    logo: {
        width: 100,
        [theme.breakpoints.up('sm')]: {
            width: 170
        }
    }
}));

const Navbar: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}>
                    <img src={logo} alt="CodeFlix" className={classes.logo}/>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;