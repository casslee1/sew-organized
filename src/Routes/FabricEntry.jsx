import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";


const FabricEntry = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [fabric, setFabric] = useState(null);

  const handleEdit = () => {
    navigate(`/fabric/edit/${fabric.id}`);
  };

  useEffect(() => {
    const fetchFabric = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/fabric/${id}`);
        setFabric(response.data);
      } catch (error) {
        console.error("Error fetching fabric details:", error);
      }
    };

    fetchFabric();
  }, [id]);

  if (!fabric) {
    return <div>Fabric not found</div>;
  }

    return (
      <div className='itemEntryWrapper'>
        <div className='topImageWrapper'>
          <img src={`http://localhost:8080/uploads/${fabric.fabricImage || "velvetFabric.png"}`} alt="fabric" />
        </div>
        <div className='listWrapper'>
          <List>
            <ListItem>
              <ListItemText primary={`Name: ${fabric.fabricName}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={fabric.length ? (`Length: ${fabric.length}`) : ( <> Length: <Link to="../editfabric">edit</Link> </> )} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Width: ${fabric.width}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Fibre Type: ${ JSON.parse(fabric.fibreType).join(', ')}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Woven or knit: ${fabric.wovenOrKnit}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Fabric Type: ${fabric.fabricType}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Solid or print: ${fabric.solidOrPrint}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Print type: ${fabric.printType}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Dominant colour: ${fabric.dominantColour}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Date of purchase: ${fabric.purchaseDate ? fabric.purchaseDate.split('T')[0] : 'Not Entered'}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Purchased from: ${fabric.purchasedFrom}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Price: ${fabric.price}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Prewashed: ${fabric.prewashed}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary={`Notes: ${fabric.notes}`} />
            </ListItem>
          </List>
        </div>
        
          <Button variant="contained" sx={{background:'#9fdbcd'}} onClick={handleEdit}>Edit Fabric</Button>
        
      </div>
    );
  };
  
  export default FabricEntry;