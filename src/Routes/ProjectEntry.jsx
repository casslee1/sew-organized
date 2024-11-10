import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";

const ProjectEntry = () => {

  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }


    return (
      <div className='itemEntryWrapper'>
        <div className='topImageWrapper'>
          <img src={`http://localhost:8080/uploads/${project.projectImage || "velvetFabric.png"}`} alt="project" />
        </div>
        <div className='listWrapper'>
          <List>
          <ListItem>
              <ListItemText primary={`Project name: ${project.projectName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fabric: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Project status: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Have all supplies: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Deadline: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date started: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date completed: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Size: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Length of fabric used: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Thread used: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fitting notes: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notes: " />
            </ListItem>
          </List>
        </div>
        <Link to="../editproject">
          <Button variant="contained" sx={{background:'#9fdbcd'}}>Edit Project</Button>
        </Link>
      </div>
    );
  };
  
  export default ProjectEntry;