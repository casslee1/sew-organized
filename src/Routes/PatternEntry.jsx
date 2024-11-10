import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";

const PatternEntry = () => {

    const { id } = useParams();
    const [pattern, setPattern] = useState(null);
  
    useEffect(() => {
      const fetchPattern = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/patterns/${id}`);
          setPattern(response.data);
        } catch (error) {
          console.error("Error fetching pattern details:", error);
        }
      };
  
      fetchPattern();
    }, [id]);
  
    if (!pattern) {
      return <div>Pattern not found</div>;
    }

    return (
      <div className='itemEntryWrapper'>
        <div className='topImageWrapper'>
          <img src={`http://localhost:8080/uploads/${pattern.patternImage || "velvetFabric.png"}`} alt="fabric" />
        </div>
        <div className='listWrapper'>
          <List>
            <ListItem>
              <ListItemText primary={`Pattern company: ${pattern.patternCompany}`} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern number: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern name: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Size range: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern type: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Print or PDF: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pattern printed: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cut out: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fabric requirements: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notions required: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Purchase date: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Year released: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="For woven or knit: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Recommended fabric types: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Purchased from: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notes: " />
            </ListItem>
          </List>
        </div>
          <Link to="../editpattern">
            <Button variant="contained" sx={{background:'#9fdbcd'}}>Edit Pattern</Button>
          </Link>
      </div>
    );
  };
  
  export default PatternEntry;