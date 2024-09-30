import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import '../Styles/itemPage.css';


const FabricEntry = () => {
    return (
      <div className='itemEntryWrapper'>
        <div className='topImageWrapper'>
          <img src="src/Images/velvetFabric.png" alt="fabric" />
        </div>
        <div className='listWrapper'>
          <List>
            <ListItem>
              <ListItemText primary="Name: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Length: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Width: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fibre type: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Woven or knit: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Solid or print: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Print type: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Dominant colour: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date of purchase: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Purchased from: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Price: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Prewashed: " />
            </ListItem>
            <ListItem>
              <ListItemText primary="Notes: " />
            </ListItem>
          </List>
        </div>
      </div>
    );
  };
  
  export default FabricEntry;