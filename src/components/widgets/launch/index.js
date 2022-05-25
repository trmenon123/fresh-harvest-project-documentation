import React, { Component} from "react";
import SubWidget from "../profile/sub";
import config from '../../../constants/config.json';

// Material UI imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

class LaunchWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedService: 0,
        };
    }

    componentDidMount() {
        console.log("Component mounted");        
    }

    componentDidUpdate() {        
        console.log(this.state);
    }

    handleChange = (event, newService)=> {
        this.setState({...this.state, selectedService: newService});
    }

    render() {
        return(
            <React.Fragment>
                <Box sx={{width: '100%', px: 2, borderBottom: '1px solid #ececec'}}>
                    <Typography
                        variant="h4" 
                        gutterBottom
                        align="justify" 
                        component="div"
                        sx={{my: 2}}
                    >
                        System Integration
                    </Typography>
                </Box>
                <Box sx={{width: '100%', mt: 2, px: 2}}>
                    <ToggleButtonGroup
                        color="secondary"
                        value={this.state.selectedService}
                        exclusive
                        onChange={this.handleChange}
                        sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}
                    >
                        <ToggleButton value={0} size="small">Backend</ToggleButton>
                        <ToggleButton value={1} size="small">Frontend</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
                <Box sx={{width: '100%', mt: 2, px: 2}}>
                    <SubWidget
                        isBackend= {this.state.selectedService === 0? true: false}
                        label= {this.state.selectedService === 0? 
                            config?.integration?.backend?.label
                            :
                            config?.integration?.frontend?.label                            
                        }
                        textContent= {this.state.selectedService === 0? 
                            config?.integration?.backend?.information
                            :
                            config?.integration?.frontend?.information                            
                        }
                        dependencyList= {this.state.selectedService === 0? 
                            config?.integration?.backend?.dependencyList
                            :
                            config?.integration?.frontend?.dependencyList                            
                        }
                        repoList= {this.state.selectedService === 0? 
                            config?.integration?.backend?.repoList
                            :
                            config?.integration?.frontend?.repoList                            
                        }
                    />
                </Box>
                
            </React.Fragment>          
        )
    }
}

export default LaunchWidget;