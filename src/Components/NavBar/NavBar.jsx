import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import styles from './navBar.module.css';

function NavBar() {
    return (
    <div className={styles.flexContainer}>
        <div >
        <Link to="/fabric">
            <Button variant="contained" sx={{background:'#9fdbcd'}}>Fabric</Button>
        </Link>  
        </div>
        <div>
        <Link to="/patterns">
            <Button variant="contained" sx={{background:'#9fdbcd'}}>Patterns</Button>
        </Link>  
        </div>
        <div>
        <Link to="/projects">
            <Button variant="contained" sx={{background:'#9fdbcd'}}>Projects</Button>
        </Link>  
        </div>
    </div>
    );
}

export default NavBar;