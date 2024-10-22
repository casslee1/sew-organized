import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import SampleCard from '../Components/SampleCard/SampleCard';
import '../Styles/index.css';

const Patterns = () => {
    return (
      <div className='background'>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
          <div className='addButtonWrapper'>
            <Link to="../addsample">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add To Sample Table</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
            <SampleCard /> <SampleCard />
          </div>
        </div>
      </div>
    );
  };
  
  export default Patterns;