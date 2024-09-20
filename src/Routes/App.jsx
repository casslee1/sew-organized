import { Link } from "react-router-dom";
import './App.css'
import Button from '@mui/material/Button';

const App = () => {
  return (
 <div>
  <div>
    <h1>Sew Organized</h1>
  </div>
  <div>
    <h4>Stay on top of your sewing projects with Sew Organized! Track your fabric, patterns, and projects all in one place—designed to help bring your next creation to life.</h4>
  </div>
  <div>
    <Link to="fabric">
      <Button variant="contained">Get Started</Button>
    </Link>
  </div>
 </div>
  );
};

export default App;

