import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import PatternCard from '../Components/PatternCard/PatternCard';
import '../Styles/index.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Patterns = () => {
  const [patterns, setPatterns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/patterns/get");
        console.log("Fetched pattern data:", response.data);
        setPatterns(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

    return (
      <div className='background'>
        <div className="navWrapper">
          <NavBar/>
        </div>
        <div className="pageWrapper">
          <div className='addButtonWrapper'>
            <Link to="../addpatterns">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add New Patterns</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
            {patterns.map((patterns) => (
            <PatternCard 
            key={patterns.id} 
            userID={patterns.userID}
            patternName={patterns.patternName}
            patternImage={patterns.patternImage}
            /> 
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Patterns;