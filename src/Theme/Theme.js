import {createTheme} from '@mui/material/styles';


const defaultTheme = createTheme({
    components:{
        MuiGrid:{
            styleOverrides:{
                root:{
                    '&.MuiGrid-root.MuiGrid-container':{
                        padding:'0px 15px',
                    }
                }
            }
        }
    },
    palette:{
        defaultColors:{
            logoColor:'#30abb0',
        }
    }
})

export default defaultTheme;