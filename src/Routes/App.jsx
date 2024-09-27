import { Link } from "react-router-dom";
import './App.css'
import Button from '@mui/material/Button';
import SignUp from '../Components/sign-up/SignUp'
import SignIn from '../Components/sign-in/SignIn'

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
    <Link to="about">
      <Button variant="contained">Learn More</Button>
    </Link>
  </div>
  <br />
  <div>
    <Link to="fabric">
      <Button variant="contained">Get Started</Button>
    </Link>
  </div>
 </div>
  );
};

export default App;

