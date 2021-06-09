import react from 'react';
import {Grid, Typography} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'

const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <div className={classes.texture}>
            <Grid container justify='center'>
                <Grid item>
                    <Typography variant="h2" align="center" gutterBottom>Shop</Typography>
                </Grid>
            </Grid>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}  onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    </main>
    )
}

export default Products;