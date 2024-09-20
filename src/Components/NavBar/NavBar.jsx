import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import styles from './navBar.module.css';

function NavBar() {
    return (
    <div className={styles.flexContainer}>
        <div >
        <Link to="/fabric">
            <Button variant="contained">Fabric</Button>
        </Link>  
        </div>
        <div>
        <Link to="/patterns">
            <Button variant="contained">Patterns</Button>
        </Link>  
        </div>
        <div>
        <Link to="/projects">
            <Button variant="contained">Projects</Button>
        </Link>  
        </div>
    </div>
    );
}

export default NavBar;