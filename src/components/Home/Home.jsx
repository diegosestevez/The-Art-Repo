import {Grid, Typography,Button, Card, CardMedia, CardContent, CardActions, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './styles';
import {Link} from 'react-router-dom';


const Home = ({products, onAddToCart}) => {
 const classes = useStyles();

    return(
        <>
        <Grid className={classes.root} container alignContent='center'>
            <Grid className={classes.content} item xs={12}>
                <Typography className={classes.heading} variant="h1" align="center">The Art Repo</Typography>
                <Typography className={classes.heading} variant="h5" align="center">Your neighborhood art store</Typography>
            </Grid>
            <Grid className={classes.content} item xs={12}>
                <Button component={Link} to='/shop' className={classes.button} variant="contained" size='large'>Shop</Button>
            </Grid>
        </Grid>
        <div className={classes.texture}>
        <Grid container justify='center'>
            <Grid item>
                <Typography variant="h2" align="center" gutterBottom>About the Art Repo</Typography>
            </Grid>
        </Grid>
        <Grid className={classes.paragraph} container justify='center' spacing={5}>
                <Grid item sm={6} xs={12}>
                    <Typography variant="body1">The Art Repo is an online platform dedicated to showcasing the works done by local artists in Vancouver. It is an inviting space which encourages the thoughtful experimentation of driven creatives who strive to challenge the boundaries set by traditional forms of art. The Art Repo is open to artists of all skill levels and backgrounds who are looking for opportunities to connect with the general public without need for a traditional setting such as an art gallery or studio.</Typography>    
                </Grid>
                <Grid item sm={6} xs={12}>    
                    <Typography variant="body1">Since 2016 it has been the Art Repo’s mission to contribute to the artistic culture of Vancouver by introducing those who are often overlooked by the broader art community. Artists who apply to have their works shown on our shop are not required to have formal training or an established reputation. Instead the Art Repo strives to be a space where all passionate artists are given the opportunity to connect with an audience directly. The proceeds collected from sales in our shop are used to support the artists who contribute to the Art Repo as well as help encourage various projects within the city of Vancouver.</Typography>
                </Grid>
        </Grid>
        <hr className={classes.divider}/>
        <Grid container justify='center'>
            <Grid item>
                <Typography variant="h2" align="center" gutterBottom>New Items</Typography>
            </Grid>
        </Grid>
        <Grid container justify='center' spacing={4} className={classes.cardContainer}>
            {products.map(product => {

                const productCategory = product.categories;

                for(let i = 0; i<productCategory.length; i++){
                    if(productCategory[i].name === 'New'){
                        return(
                            <Grid item  xs={12} sm={6} md={4} lg={3}> 
                                <Card className={classes.card}>
                                    <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                                    <CardContent>
                                        <div className={classes.cardContent}>
                                            <Typography variant="h5" gutterBottom>
                                                {product.name}
                                            </Typography>
                                            <Typography variant="h5">
                                                {product.price.formatted_with_symbol}
                                            </Typography>
                                            <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="textSecondary"></Typography>
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <IconButton aria-label='Add to Cart' onClick={() => onAddToCart(product.id, 1)}>
                                            <AddShoppingCart/>
                                        </IconButton>
                                    </CardActions>
                                </Card>    
                            </Grid>
                        )
                    };
                }
            })}
        </Grid>
        </div>
        </>
    )
}

export default Home;