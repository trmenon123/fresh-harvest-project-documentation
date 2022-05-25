import React from "react";
import { useNavigate  } from "react-router-dom";
import bck from '../../../assets/bck.jpg';

// Material UI imports
import Backdrop from '@mui/material/Backdrop';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Button from '@mui/material/Button';

function Gate(){
    
    const navigate = useNavigate();

    const backdropStyle = {
        color: "green",
        // backgroundColor: "rgb(240,230,0,0.4)",
        position: "absolute",
        backgroundImage: `url(${bck})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const handleClick = ()=> {
        navigate("/docs/profile");
    }

    return (
        <React.Fragment>            
            <Backdrop
                sx={{ ...backdropStyle, zIndex: (theme) => theme.zIndex.drawer + 5 }}
                open={true}
                // onClick={handleClose}
            >
                <Button 
                    variant="outlined" 
                    color="secondary"
                    startIcon={<VisibilityOutlinedIcon />}
                    onClick={handleClick}
                >
                    View Documentation
                </Button>
            </Backdrop>
        </React.Fragment>
    );
}

export default Gate;