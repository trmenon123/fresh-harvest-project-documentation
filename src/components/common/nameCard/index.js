import React, {useState} from "react";
import trmProfile from '../../../assets/trmProfile.jpg';

// Material UI imports

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { deepOrange} from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmailIcon from '@mui/icons-material/Email';

const NameCard = ()=> {
    
    const [state, setState]= useState({anchorEl: null, open: false});

    const handleOpen=(event)=> {
        setState({anchorEl: event.currentTarget, open: true});
    };

    const handleClose=()=> {
        setState({anchorEl: null, open: false});
    }

    const handleClick = (url)=> {
        window.location.href = url;        
    }

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
            >
                <Avatar 
                    sx={{ bgcolor: deepOrange[500] }}
                >
                    TM
                </Avatar>
            </IconButton>

            <Menu
                id="basic-menu"
                anchorEl={state.anchorEl}
                open={state.open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>
                    <Chip
                        avatar={<Avatar sx={{ bgcolor: deepOrange[500] }}>TM</Avatar>}
                        label="Tushar Menon"
                        variant="outlined"
                        color="warning"
                    />
                </MenuItem>
                <MenuItem 
                    onClick = {()=>{window.location='mailto: tushar.menon@trigyn.com'}}
                >
                    <ListItemIcon><EmailIcon fontSize="small" /></ListItemIcon>
                    <ListItemText>tushar.menon@trigyn.com</ListItemText>
                </MenuItem>
                <MenuItem 
                    onClick = {()=> {
                        handleClick("https://www.linkedin.com/in/tushar-menon-8314101b7/")
                    }}
                >
                    <ListItemIcon><LinkedInIcon fontSize="small" /></ListItemIcon>
                    <ListItemText>LinkedIn</ListItemText>
                </MenuItem>
                <MenuItem 
                    onClick = {()=> {
                        handleClick("https://github.com/trmenon123")
                    }}
                >
                    <ListItemIcon><GitHubIcon fontSize="small"/></ListItemIcon>
                    <ListItemText>GitHub</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default NameCard;