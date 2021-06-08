import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../assets/placeholder.jpg'

import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles(); 
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Commerce.js' height='25px' className={classes.image}/>
                        The Art Repository
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname === '/' || '/shop' ? (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" area-label="Show car items" color='inherit'>
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                    ): null}
                </Toolbar>  
            </AppBar>  
        </>
    )
}

export default Navbar

//if(location.pathname === '/'){
// do something...
//}else{ 
//    do something else
//}
