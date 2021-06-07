import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=> ({
   root:
        {
            background: 'whitesmoke',
            marginTop: '5vh',
            height: '500px',
            flexGrow: 1,
            backgroundImage: 'url(https://dbakevlar.com/wp-content/uploads/2019/04/EA8CFD0B-9BF8-4598-AD27-3F524735D7DB.gif)',
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
                borderColor:'green',
                backgroundColor:'green',
                color: 'white',
            }
        },
    // paragraph:
    //     {
    //         padding: '3rem 0 1.5rem 0',
    //         textAlign: 'justify',
    //     }     
}));