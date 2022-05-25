import React from 'react';
import config from '../../../constants/config.json';
import bck from '../../../assets/bck.jpg';

// Material UI Imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { lightGreen } from '@mui/material/colors';

function ProfileWidget() {    
    
    return (        
        <React.Fragment>
            <Card sx={{ width: '100%' , mt: 2}}>
                <CardHeader
                    avatar={
                        <Avatar 
                            sx={{ bgcolor: lightGreen[600] }} 
                            
                        >
                            <AgricultureIcon/>
                        </Avatar>
                    }
                    title="Fresh Harvest"
                    titleTypographyProps={{align:"left", fontSize: '1.5rem', fontWeight: 600}}
                    subheader="About the project"
                    subheaderTypographyProps={{align:"left"}}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={bck}
                    alt="Fresh Harvest"
                />
                <CardContent sx={{mt: 2}}>
                    {config?.profile.map((element)=> {
                        return(
                            <Typography
                                key={element?.key} 
                                variant="h6" 
                                gutterBottom
                                align="justify" 
                                component="div"
                                sx={{my: 1, color: '#666666'}}
                            >
                                {element?.data}
                            </Typography>
                        )
                    })}
                </CardContent>
            </Card>
        </React.Fragment>
    );
}


export default ProfileWidget;