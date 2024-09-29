import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import PatternCard from '../Components/PatternCard/PatternCard';
import '../Styles/index.css';

const Patterns = () => {
    return (
      <div className='background'>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
          <div className='addButtonWrapper'>
            <Link to="../addpatterns">
              <Button variant="contained">Add New Patterns</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
            <PatternCard /> <PatternCard />
          </div>
        </div>
      </div>
    );
  };
  
  export default Patterns;