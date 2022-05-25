import React from 'react';
import { NavigationBar} from '../../common';
import { Outlet} from 'react-router-dom';

// Material UI imports
import Box from '@mui/material/Box';

function Docs() {    
    
    return (
        <React.Fragment>
            <Box sx={{width: 'auto', px: 4, mt: 2}}>
                <NavigationBar/>        
            </Box>
            <Box sx={{width: 'auto', px: 4, mt: 4}}>
                <Outlet/>               
            </Box>
        </React.Fragment>    
        
    );
}


export default Docs;