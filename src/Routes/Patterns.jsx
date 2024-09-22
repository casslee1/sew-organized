import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import '../Styles/index.css';
import PatternCard from '../Components/PatternCard/PatternCard';

const Patterns = () => {
    return (
      <div>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
        <div>
          <Link to="../addpatterns">
            <Button variant="contained">Add New Patterns</Button>
          </Link>
        </div>
        <div>
          <PatternCard/>
        </div>
        </div>
      </div>
    );
  };
  
  export default Patterns;