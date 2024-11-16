import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";


const FabricEntry = () => {
  const { id } = useParams();
  const [fabric, setFabric] = useState(null);

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
              <ListItemText primary={`Length: ${fabric.length}`} />
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
              <ListItemText primary={`Date of purchase: ${fabric.purchaseDate}`} />
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
        <Link to="../editfabric">
          <Button variant="contained" sx={{background:'#9fdbcd'}}>Edit Fabric</Button>
        </Link>
      </div>
    );
  };
  
  export default FabricEntry;