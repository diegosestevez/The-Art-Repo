import {Grid, Typography,Button } from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Home = () => {
 const classes = useStyles();

    return(
        <>
        <Grid className={classes.root} container alignContent='center'>
            <Grid className={classes.content} item xs={12}>
                <Typography className={classes.heading} variant="h1">Hello World</Typography>
            </Grid>
            <Grid className={classes.content} item xs={12}>
                <Button component={Link} to='/shop' className={classes.button} variant="outlined" color="secondary" size='large'>Shop</Button>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item sm={6} xs={12}>
                <p>Some text</p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <p>Some text</p>
            </Grid>
        </Grid>
        </>
    )
}

export default Home;