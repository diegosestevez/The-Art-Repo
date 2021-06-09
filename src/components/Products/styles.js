import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
    marginTop:'-8px',
  },
  root: {
    flexGrow: 1,
  },
  texture:
  {
      paddingTop:'3rem',
      paddingBottom:'3rem',
      backgroundImage: " url(https://www.transparenttextures.com/patterns/french-stucco.png)",
  }  
}));