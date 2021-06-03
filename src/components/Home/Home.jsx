import { Typography, Container, Button } from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Home = () => {
 const classes = useStyles();

    return(
        <>
        <Container className={classes.container}>
            <Typography variant="h1">Hello World</Typography>
        </Container>
        <Button component={Link} to="/shop" variant='contained' color='secondary'>Shop</Button>
        </>
    )
}

export default Home;