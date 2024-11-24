import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import PatternCard from '../Components/PatternCard/PatternCard';
import '../Styles/index.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const Patterns = () => {
  const [patterns, setPatterns] = useState([]);
  const [filterPatterns, setFilterPatterns] = useState('');

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
          <div>
          <Box sx={{ minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel>Sort</InputLabel>
                            <Select
                                sx={{width: 380 }}
                                required                    
                                value={filterPatterns}
                                onChange={(event) => setFilterPatterns(event.target.value)}                       
                            >                    
                                <MenuItem value='patternCompany'>Pattern Company</MenuItem>
                                <MenuItem value='patternType'>Pattern Type</MenuItem>
                                <MenuItem value='printOrPDF'>Print or PDF</MenuItem>
                                <MenuItem value='wovenOrKnit'>Woven or Knit</MenuItem>
                                <MenuItem value='recommendedfabricType'>Recommended Fabric Type</MenuItem>                              
                            </Select>
                        </FormControl>
                    </Box>
          </div>
            <Link to="../addpatterns">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add New Patterns</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
            {patterns.map((patterns) => (
            <PatternCard 
            key={patterns.id} 
            id={patterns.id}
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