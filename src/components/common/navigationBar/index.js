import React, {useState, useEffect} from "react";
import { useNavigate, useLocation  } from "react-router-dom";
import config from '../../../constants/config.json';
import trmProfile from '../../../assets/trmProfile.jpg';
import { NameCard} from '../index';

// Material UI imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { lightGreen } from "@mui/material/colors";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Stack from '@mui/material/Stack';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const NavigationBar = ()=> {
    const navigate = useNavigate();
    const current = useLocation();
    const [state, setState]= useState({
        selected: "profile"
    });

    const handleChange = (event, newValue) => {        
        setState({...state, selected: newValue});
    };

    useEffect(() => {        
        const route = config?.routes.find((element)=> {
            return element?.name === state?.selected
        })['route'];
        if(current['pathname'] !== route) {
            navigate(route);
        }
    });

    return (
        <AppBar position="static" color="inherit">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack 
                        direction='row'
                        sx={{flexgrow: 1, mr: 2, py: 1}}
                    >
                        <Avatar
                            alt="Fresh Harvest" 
                            sx={{ 
                                bgcolor: lightGreen[500], 
                                width: {xs: 25, md: 45}, 
                                height: {xs: 25, md: 45} 
                            }}
                        >
                            <AgricultureIcon/>                   
                        </Avatar>
                        <Typography
                            variant='h6'
                            noWrap
                            component="div"
                            sx={{ display: {xs: 'none', md: 'flex'} }}
                        >                        
                            Fresh Harvest
                        </Typography>
                    </Stack>
                    

                    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
                        <TabContext value={state?.selected}>
                            <Box sx={{ borderColor: 'divider' }}>
                                <TabList 
                                    onChange={handleChange} 
                                    aria-label="lab API tabs example"
                                >
                                    {config.routes.map((element)=> {
                                        return(
                                            <Tab 
                                                key={element?.id}
                                                label={element?.display}
                                                value={element?.name} 
                                            />
                                        )
                                    })}
                                </TabList>
                                </Box>
                        </TabContext>
                    </Box>                   
                    <Box sx={{py: 1, flexGrow: 0}}>                        
                        <NameCard/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavigationBar;