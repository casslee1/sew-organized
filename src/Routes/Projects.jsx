import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import '../Styles/index.css';
import ProjectCard from '../Components/ProjectCard/ProjectCard';

const Projects = () => {
    return (
      <div>
          <div className="navWrapper">
            <NavBar/>
          </div>
        <div className="pageWrapper">
        <div>
          <Link to="../addprojects">
            <Button variant="contained">Add New Project</Button>
          </Link>
        </div>
        <div>
          <h2>Planned</h2>
          <ProjectCard />
        </div>
        <div>
          <h2>In Progress</h2>
          <ProjectCard />
        </div>
        <div>
          <h2>Completed</h2>
          <ProjectCard />
        </div>
        <div>
          <h2>On Hold</h2>
          <ProjectCard />
        </div>
        </div>
      </div>
    );
  };
  
  export default Projects;