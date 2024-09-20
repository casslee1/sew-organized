import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import '../Styles/index.css';

const Fabric = () => {
    return (
      <div>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
        <div>
          <Link to="../addfabric">
            <Button variant="contained">Add New Fabric</Button>
          </Link>
        </div>
        <p>Cards showing existing fabric in stash will go here</p>
        </div>
      </div>
    );
  };
  
  export default Fabric;