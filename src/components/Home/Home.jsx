import {Container, Grid, Typography,Button, Box, Card, CardMedia, CardContent, CardActions, withWidth} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';


const Home = ({products, onAddToCart}) => {
 const classes = useStyles();

    return(
        <>
        <Grid className={classes.root} container alignContent='center'>
            <Grid className={classes.content} item xs={12}>
                <Typography className={classes.heading} variant="h1">The Art Repository</Typography>
            </Grid>
            <Grid className={classes.content} item xs={12}>
                <Button component={Link} to='/shop' className={classes.button} variant="outlined" size='large'>Shop</Button>
            </Grid>
        </Grid>
        <Grid className={classes.paragraph} container justify='center' spacing={5}>
                <Grid item sm={6} xs={12}>
                    <Typography variant="body1">The Art Shop (TAS) is a platform for the representation of artists without pretense, an inviting space for experimentation and participation. Reinventing the traditional model of an art gallery, TAS blurs the separated genres of art and affordability. Presenting local young creatives, TAS aims to catalyze a connection between emerging artists and those who are aesthetically driven and interested in art but find art galleries too pretentious or academic, educating viewers to trust in what they respond to and helping bridge the distance between viewer and art.</Typography>    
                </Grid>
                <Grid item sm={6} xs={12}>    
                    <Typography variant="body1">The mission of TAS is to contribute to the artistic culture of Vancouver as an identity recognized for representing artists in a novel way and for providing diverse opportunities for people to relate to art and artists. A space of experimentation and interpersonal communication, young, vibrant, and community-focused, the intention of TAS is for people to feel comfortable and welcomed, and for artists to feel represented in a positive and fair way.</Typography>
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
                                </Card>    
                            </Grid>
                        )
                    };
                }
            })}
        </Grid>
       
        </>
    )
}

export default Home;