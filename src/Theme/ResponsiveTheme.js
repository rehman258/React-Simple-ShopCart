import {styled} from '@mui/material/styles';




const ThemeRoot = styled('div')(({ theme }) => ({
    '& .section-header':{
        [theme.breakpoints.down('md')]: {
            fontSize:'36px !important',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'32px !important',
        },
    },
    '& .mx-0-md':{
        [theme.breakpoints.down('md')]: {
            marginLeft:'0px',
            marginRight:'0px',
        },
    },
    '& .px-0-md':{
        [theme.breakpoints.down('md')]: {
            paddingLeft:'0px',
            paddingRight:'0px',
        },
    }
    
    // '& .contact-name':{
    //     [theme.breakpoints.down('md')]: {
    //         marginRight:'0px',
    //     },
    // },
    // '& .contact-number':{
    //     [theme.breakpoints.down('md')]: {
    //         marginLeft:'0px',
    //     },
    // },    
    
    
    // [theme.breakpoints.up('sm')]: {
    //     backgroundColor: 'yellow',
    // },


    // [theme.breakpoints.up('lg')]: {
    //     backgroundColor: 'green',
    // },  


}));


export default ThemeRoot;