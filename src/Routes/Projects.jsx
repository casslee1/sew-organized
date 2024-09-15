import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Projects = () => {
    return (
      <div>
        <h1>Projects</h1>
        <div>
          <Link to="../addprojects">
            <Button variant="contained">Add New Project</Button>
          </Link>
        </div>
        <p>Cards showing existing projects in stash will go here</p>
      </div>
    );
  };
  
  export default Projects;