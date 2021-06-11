import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    marginTop: '5%',
  },
  subtotal:{
  //  padding: '3rem',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
      marginLeft: '0px',
    },
    marginLeft: '20px',
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    color: "red",
    "&:hover":{
      color: 'grey',
    }
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7%',
    width: '100%',
    alignItems: 'flex-end',
  },
  texture: {
    padding:'3rem 0',
    backgroundImage: " url(https://www.transparenttextures.com/patterns/french-stucco.png)",
  },
  emptyFooterPadding:{
    paddingBottom: '30vh',
  }
}));