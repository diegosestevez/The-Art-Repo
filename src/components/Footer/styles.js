import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
    footer:
    {
        backgroundColor: 'black',
        color: 'white',
    },
    footerContainer:{
        padding:'2rem 0',
    },
    footerElement:
    {
        "&:visited":{
            color: 'white',
        },
        "&:hover":{
            color: 'red',
        },
        "&:active":{
            color: 'grey',
        }
    },
    logoContainer:{
        padding: '25px',
    },
    footerLogo:{
        display:"block",
        margin:'auto',
    }

}));