import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-evenly',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));