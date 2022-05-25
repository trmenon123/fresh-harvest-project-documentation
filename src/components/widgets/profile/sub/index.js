import React from 'react';
import PropTypes from 'prop-types';
import backend from '../../../../assets/nodejs.png';
import frontend from '../../../../assets/reactjs.png';

// Material UI Imports
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

function SubWidget(props) {    
    
    return (        
        <React.Fragment>
            <Card sx={{ width: '100%' , mt: 2}}>
                <CardHeader
                    avatar={
                        <Avatar 
                            alt="Card Avatar" 
                            src={props.isBackend === true? backend: frontend}
                        />
                    }
                    title={props.label}
                    titleTypographyProps={{align:"left"}}
                    subheader={props.textContent}
                    subheaderTypographyProps={{align:"left"}}
                />
                <Divider/>
                <CardContent sx={{mt: 2}}>
                    <React.Fragment>                        
                        <Box sx={{width: '100%', my: 2}}>
                            <Typography
                                variant="h4" 
                                gutterBottom
                                align="justify" 
                                component="div"
                                sx={{borderBottom: '1px solid #ececec'}}
                            >
                                Dependencies
                            </Typography>
                            <Box sx={{width: '100%'}}>
                                {props?.dependencyList.length === 0?
                                    "Nothing to see here, Wait for next release"
                                    :
                                    <Grid container spacing={2}>
                                        {props.dependencyList.map((element)=> {
                                            return (
                                                <Grid 
                                                    key={element?.key}
                                                    item 
                                                    xs={6} md={3} lg={2} xl={1}
                                                >
                                                    <Chip  
                                                        label={element?.value}
                                                        color="secondary"
                                                        variant="outlined"
                                                        sx={{width: '100%'}}
                                                    />
                                                </Grid>
                                            )
                                        })}                                    
                                    </Grid>
                                }
                            </Box>
                            
                        </Box>
                        <Box sx={{width: '100%', my: 2}}>
                            <Typography
                                variant="h4" 
                                gutterBottom
                                align="justify" 
                                component="div"
                                sx={{borderBottom: '1px solid #ececec'}}
                            >
                                Git Repos
                            </Typography>
                            
                            <Box>
                                {props?.repoList.length === 0?
                                    "No repos found. Wait for next release"
                                    :
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                    >
                                        {props.repoList.map((element)=> {
                                            return (
                                                <Link 
                                                    key={element?.key}
                                                    href={element?.repo}
                                                >
                                                    {element?.name}
                                                </Link>
                                            )
                                        })}
                                    </Stack>                                    
                                }
                            </Box>
                        </Box>
                        <Box sx={{width: '100%', my: 2}}>
                            <Typography
                                variant="h4" 
                                gutterBottom
                                align="justify" 
                                component="div"
                                sx={{borderBottom: '1px solid #ececec'}}
                            >
                                Installation
                            </Typography>
                            <Typography
                                variant="h6" 
                                gutterBottom
                                align="justify" 
                                component="div"
                            >
                                npm install
                            </Typography>
                        </Box>
                        <Box sx={{width: '100%', my: 2}}>
                            <Typography
                                variant="h4" 
                                gutterBottom
                                align="justify" 
                                component="div"
                                sx={{borderBottom: '1px solid #ececec'}}
                            >
                                Scripts
                            </Typography>
                            <Typography
                                variant="h6" 
                                gutterBottom
                                align="justify" 
                                component="div"
                            >
                                {props.isBackend=== true? "npm run dev-server": "npm start"} 
                            </Typography>
                        </Box>
                    </React.Fragment>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

SubWidget.propTypes= {
    isBackend: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    dependencyList: PropTypes.array.isRequired,
    repoList: PropTypes.array.isRequired
}

SubWidget.defaultProps = {
    isBackend: false,
    label: "",
    textContent: "",
    dependencyList: [],
    repoList: []
}

export default SubWidget;