import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import NavBar from '../Components/NavBar/NavBar';
import FabricCard from '../Components/FabricCard/FabricCard';
import '../Styles/index.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Fabric = () => {
  const [fabric, setFabric] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:8080/fabric/get");
          console.log("Fetched fabric data:", response.data);
          setFabric(response.data); 
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
            <Link to="../addfabric">
              <Button variant="contained" sx={{background:'#9fdbcd'}}>Add New Fabric</Button>
            </Link>
          </div>
          <div className='cardWrapper'>
          {fabric.map((fabric) => (
            <FabricCard 
                key={fabric.id} 
                id={fabric.id}
                userID={fabric.userID}
                fabricName={fabric.fabricName}
                fabricImage={fabric.fabricImage}
            />
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Fabric;