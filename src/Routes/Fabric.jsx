import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Fabric = () => {
    return (
      <div>
        <h1>Fabric</h1>
        <div>
          <Link to="../addfabric">
            <Button variant="contained">Add New Fabric</Button>
          </Link>
        </div>
        <p>Cards showing existing fabric in stash will go here</p>
      </div>
    );
  };
  
  export default Fabric;