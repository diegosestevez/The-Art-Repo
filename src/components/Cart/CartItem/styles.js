import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root:{
    maxWidth: '100%',
  },
  media: {
      height: 0,
      paddingTop: '56.25%',
      display: 'block',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
  },
  cartContent: {
    display:'flex',
    flexDirection: 'column',
  },
  cartActions: {
    justifyContent: 'flex-end',
    margin: "8px 0",
    padding: "12px 12px",
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));