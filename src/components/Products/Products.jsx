import react from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles'

// const products = [
//     {id: 1, name: 'Shoes', description: 'Running Shoes.', price:'$5', image:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/32cd21bed32344f38f50ab7a011d2044_9366/FortaRun_Running_Shoes_2020_Black_FW3719_01_standard.jpg'},
//     {id: 2, name: 'Macbook', description: 'Apple Macbook', price:'$10', image:'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg'}
// ]

const Products = ({products, onAddToCart}) =>{
    const classes = useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Grid container justify="center" spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}  onAddToCart={onAddToCart}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;