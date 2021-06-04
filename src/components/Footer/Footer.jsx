import {BottomNavigation, Grid, Typography} from '@material-ui/core';
import makeStyles from './styles';

const Footer = () => {
    const classes = makeStyles();

    return(
        <>
          <BottomNavigation className={classes.footer}>
              <Typography variant="body1">hi</Typography>
          </BottomNavigation>  
        </>
    )
}

export default Footer;