import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Patterns = () => {
    return (
      <div>
        <h1>Patterns</h1>
        <div>
          <Link to="../addpatterns">
            <Button variant="contained">Add New Patterns</Button>
          </Link>
        </div>
        <p>Cards showing existing patterns in stash will go here</p>
      </div>
    );
  };
  
  export default Patterns;