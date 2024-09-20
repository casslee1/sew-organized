import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import '../Styles/index.css';

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
        <p>Cards showing existing projects will go here</p>
        </div>
      </div>
    );
  };
  
  export default Projects;