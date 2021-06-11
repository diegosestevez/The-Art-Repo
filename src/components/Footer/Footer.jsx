import {Box, Container, Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import makeStyles from './styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    const classes = makeStyles();
    const year = new Date().getFullYear();

    return(
        <>
        <Container className={classes.footer} maxWidth='100%'>
            <Grid container justify='space-evenly' alignItems='center' className={classes.footerContainer} >
                <Grid item>
                    <Grid container spacing={5}>
                        <Grid item>
                            <a href="/" className={classes.footerElement}><TwitterIcon fontSize='large'/> </a>
                        </Grid>
                        <Grid item>
                            <a href="/" className={classes.footerElement}><FacebookIcon fontSize='large'/></a>
                        </Grid>
                        <Grid item>
                            <a href="/" className={classes.footerElement}><InstagramIcon  fontSize='large'/></a>
                        </Grid>
                        <Grid item>
                            <a href="/" className={classes.footerElement}><YouTubeIcon  fontSize='large'/></a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Box pt={3}>
                    <Typography variant='subtitle2'>1685 Davie Street</Typography>
                    <Typography variant='subtitle2'>V6B 2G2</Typography>
                    <Typography variant='subtitle2'>Vancouver BC</Typography>
                    <Typography variant='subtitle2'>604-864-4649</Typography>
                    <Typography variant='subtitle2'>art@artrepo.com</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <Grid item>
                    <Typography variant="body1">&copy; {year} The Art Repo</Typography>
                </Grid>
            </Grid>
       
        </Container>
        </>
    )
}

export default Footer;