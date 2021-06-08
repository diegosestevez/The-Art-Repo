import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=> ({
   root:
        {
            background: 'whitesmoke',
            marginTop: '8vh',
            height: '100vh',
            flexGrow: 1,
            backgroundImage: 'url(https://dbakevlar.com/wp-content/uploads/2019/04/EA8CFD0B-9BF8-4598-AD27-3F524735D7DB.gif)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
        },    
   content:
        {
            margin: '2vh 0',
        }, 
   heading:
        {
        textAlign: 'center',
        color: 'white',
        },
    button:
        {
            margin: 'auto',
            display: 'block',
            width: '85px',
            color:'white',
            borderColor:'white',
            "&:hover":{
                borderColor:'white',
                backgroundColor:'white',
                color: 'black',
            }
        },
    paragraph:
        {
            padding: '3rem 10vw',
            textAlign: 'justify',
        },
    cardContainer:
        {
            paddingBottom: '3rem',
        },    
    card:
        {
            // maxWidth: '100%', 
        },        
    media: 
        {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    cardContent: 
        {
            display: 'flex',
            justifyContent: 'space-between',
        },          
}));