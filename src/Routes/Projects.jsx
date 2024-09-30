import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import '../Styles/index.css';
import ProjectCard from '../Components/ProjectCard/ProjectCard';
import { FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";

const Projects = () => {

  const [projectStatus, setProjectStatus] = useState('');

    return (
      <div className='background'>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
          <div className='addButtonWrapper'>
          <Box sx={{ minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel>Project Status</InputLabel>
                            <Select
                                sx={{width: 380 }}
                                required                    
                                value={projectStatus}
                                onChange={(event) => setProjectStatus(event.target.value)}                       
                            >                    
                                <MenuItem value='planned'>Planned</MenuItem>
                                <MenuItem value='inProgress'>In Progress</MenuItem>
                                <MenuItem value='completed'>Completed</MenuItem>
                                <MenuItem value='onHold'>On Hold</MenuItem>                             
                            </Select>
                        </FormControl>
                    </Box>
            <Link to="../addprojects">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add New Project</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
            <ProjectCard /> <ProjectCard />
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;