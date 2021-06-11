import React from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles'


const Cart = ({cart, handleUpdateCartQty,  handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();

    const EmptyCart = () => {
        return(
         <div className={classes.emptyFooterPadding}>   
            <Typography variant="subtitle1" align="center">You have no items in your shopping cart, 
                <Link to="/shop" className={classes.link}> start adding some</Link>!
            </Typography>
        </div>
        )
    }

    const FilledCart = () => {
        return(
        <>
            <Grid container spacing={3} justify="center">
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4' classname={classes.subtotal} gutterBottom> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Button</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
        )
    }

    if(!cart.line_items) return "Loading...";

    return (
        <div className={classes.texture}> 
            <Typography className={classes.title} align="center" variant="h2" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length  ? <EmptyCart/>:<FilledCart/> }
        </div>
    )
}

export default Cart
