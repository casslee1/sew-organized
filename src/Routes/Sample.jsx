import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import SampleCard from '../Components/SampleCard/SampleCard';
import '../Styles/index.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Sample = () => {
    const [samples, setSamples] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/sample/get");
            setSamples(response.data); 
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
            <Link to="../addsample">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add To Sample Table</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
          {samples.map((sample) => (
            <SampleCard
              key={sample.sampleID} 
              userID={sample.userID}
              sampleColumn={sample.sampleColumn}
            />
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sample;