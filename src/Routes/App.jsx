import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Button from '@mui/material/Button';
import LoginDialog from '../Components/LoginDialog/LoginDialog'
/*import SignUp from '../Components/sign-up/SignUp'
import SignIn from '../Components/sign-in/SignIn'*/

const App = () => {

  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleClose = () => {
    setLoginDialogOpen(false);
  };

  return (
 <div className='background'>
  <div className='titleContainer'>
    <div className='title'>
      <h1>Sew Organized</h1>
    </div>
  </div>
  <div className='descriptionContainer'>
    <h3>Stay on top of your sewing projects with Sew Organized! Track your fabric, patterns, and projects all in one place — designed to help bring your next creation to life.</h3>
  </div>
  <div className='buttonContainer'> 
    <div>
      <Link to="about">
        <Button variant="contained" sx={{background:'#ff5938'}}>Learn More</Button>
      </Link>
    </div>
    <div>
      <LoginDialog open={loginDialogOpen} handleClose={handleClose} />
    </div>
  </div> 
 </div>
  );
};

export default App;

